/**
 * proposal-builder — внутренний контур + SSO Naumen (Keycloak OIDC)
 *
 * Статика конструктора раздаётся этим сервером; весь доступ закрыт
 * авторизацией через sso.naumen.ru (authorization code + PKCE),
 * по образцу vibe-integration-staging.skorozvon.ru.
 *
 * Конфигурация через переменные окружения (см. .env.example):
 *   PORT                 — порт pm2-приложения (default 3410)
 *   PUBLIC_DIR           — каталог со статикой конструктора (default ./public)
 *   BASE_URL             — внешний адрес, напр. https://kpbuilder.skorozvon.ru
 *   OIDC_ISSUER          — https://sso.naumen.ru/realms/naumen
 *   OIDC_CLIENT_ID       — клиент, зарегистрированный ИТ в Keycloak (= хост)
 *   OIDC_CLIENT_SECRET   — секрет конфиденциального клиента (можно пустой = public+PKCE)
 *   SESSION_SECRET       — случайная строка для подписи сессий
 *   AUTH_DISABLED        — =1 полностью отключает SSO (только локальная отладка)
 */
const path = require("path");
const crypto = require("crypto");
const express = require("express");
const session = require("express-session");

const PORT = parseInt(process.env.PORT || "8000", 10);
const PUBLIC_DIR = process.env.PUBLIC_DIR || path.join(__dirname, "public");
const BASE_URL = (process.env.BASE_URL || `http://localhost:${PORT}`).replace(/\/$/, "");
const ISSUER = (process.env.OIDC_ISSUER || "https://sso.naumen.ru/realms/naumen").replace(/\/$/, "");
const CLIENT_ID = process.env.OIDC_CLIENT_ID || "";
const CLIENT_SECRET = process.env.OIDC_CLIENT_SECRET || process.env.CLIENT_SECRET || "";
const AUTH_DISABLED = process.env.AUTH_DISABLED === "1";

const oidc = {
  authorizationEndpoint: `${ISSUER}/protocol/openid-connect/auth`,
  tokenEndpoint: `${ISSUER}/protocol/openid-connect/token`,
  userinfoEndpoint: `${ISSUER}/protocol/openid-connect/userinfo`,
  endSessionEndpoint: `${ISSUER}/protocol/openid-connect/logout`,
};

const app = express();
app.disable("x-powered-by");
app.set("trust proxy", 1); // nginx termination

app.use(
  session({
    secret: process.env.SESSION_SECRET || "dev-insecure-secret",
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, sameSite: "lax", secure: BASE_URL.startsWith("https"), maxAge: 8 * 3600 * 1000 },
  })
);

// ---------- OIDC ----------
function b64url(buf) {
  return Buffer.from(buf).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

app.get("/api/me", (req, res) => {
  if (AUTH_DISABLED) return res.json({ name: "dev", email: "dev@localhost", role: "dev" });
  if (!req.session.user) return res.status(401).json({ error: "Unauthorized" });
  res.json(req.session.user);
});

app.get("/login", async (req, res) => {
  const verifier = b64url(crypto.randomBytes(32));
  const challenge = b64url(crypto.createHash("sha256").update(verifier).digest());
  const state = b64url(crypto.randomBytes(16));
  const nonce = b64url(crypto.randomBytes(16));
  req.session.oauth = { verifier, state, nonce, returnTo: safeReturn(req.query.next) };

  const u = new URL(oidc.authorizationEndpoint);
  u.searchParams.set("client_id", CLIENT_ID);
  u.searchParams.set("redirect_uri", `${BASE_URL}/oauth/callback`);
  u.searchParams.set("response_type", "code");
  u.searchParams.set("scope", "openid profile email");
  u.searchParams.set("state", state);
  u.searchParams.set("nonce", nonce);
  u.searchParams.set("code_challenge", challenge);
  u.searchParams.set("code_challenge_method", "S256");
  res.redirect(u.toString());
});

app.get("/oauth/callback", async (req, res) => {
  const oauth = req.session.oauth;
  if (!oauth || req.query.state !== oauth.state) {
    return res.status(400).send("OIDC state mismatch");
  }
  delete req.session.oauth;

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: CLIENT_ID,
    redirect_uri: `${BASE_URL}/oauth/callback`,
    code: String(req.query.code || ""),
    code_verifier: oauth.verifier,
  });
  if (CLIENT_SECRET) body.set("client_secret", CLIENT_SECRET);

  const tokenResp = await fetch(oidc.tokenEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!tokenResp.ok) {
    return res.status(502).send("SSO token exchange failed: " + (await tokenResp.text()).slice(0, 300));
  }
  const tokens = await tokenResp.json();

  let profile = {};
  try {
    const ui = await fetch(oidc.userinfoEndpoint, {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    });
    if (ui.ok) profile = await ui.json();
  } catch (_) {/* userinfo optional */}

  req.session.user = {
    email: profile.email || "",
    name: profile.name || profile.preferred_username || profile.email || "сотрудник",
    subject: profile.sub || "",
  };
  req.session.idToken = tokens.id_token || null;
  res.redirect(oauth.returnTo || "/");
});

app.get("/logout", async (req, res) => {
  const idToken = req.session.idToken;
  req.session.destroy(() => {});
  res.clearCookie("kpbuilder_sid");
  let url = "/";
  if (idToken) {
    const u = new URL(oidc.endSessionEndpoint);
    u.searchParams.set("id_token_hint", idToken);
    u.searchParams.set("post_logout_redirect_uri", BASE_URL + "/");
    url = u.toString();
  }
  res.redirect(url);
});

function safeReturn(next) {
  if (typeof next !== "string") return "/";
  if (!next.startsWith("/") || next.startsWith("//")) return "/";
  return next;
}

// ---------- gate ----------
app.use((req, res, next) => {
  if (AUTH_DISABLED || req.session.user) return next();
  if (req.path.startsWith("/api/")) return res.status(401).json({ error: "Unauthorized" });
  res.redirect(`/login?next=${encodeURIComponent(req.originalUrl)}`);
});

// ---------- static ----------
app.use(express.static(PUBLIC_DIR, { extensions: ["html"], index: "index.html" }));

app.listen(PORT, () => {
  console.log(`proposal-builder listening on ${PORT}, base=${BASE_URL}, sso=${AUTH_DISABLED ? "DISABLED" : ISSUER}`);
});