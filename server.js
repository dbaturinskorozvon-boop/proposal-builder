/**
 * proposal-builder — внутренний контур, HTTP Basic auth + защита от перебора
 *
 * Статика конструктора раздаётся этим сервером; весь доступ закрыт
 * simple basic-авторизацией (возврат к SSO Naumen — когда ИТ
 * зарегистрируют OIDC-клиент в Keycloak).
 *
 * Конфигурация через переменные окружения:
 *   PORT         — порт (default 8000)
 *   PUBLIC_DIR   — каталог со статикой (default ./public)
 *   AUTH_USER    — логин basic-auth (обязателен, кроме AUTH_DISABLED)
 *   AUTH_PASS    — пароль basic-auth, минимум 16 символов (кроме AUTH_DISABLED)
 *   AUTH_DISABLED— =1 отключает авторизацию (только локальная отладка)
 */
const path = require("path");
const crypto = require("crypto");
const express = require("express");

const PORT = parseInt(process.env.PORT || "8000", 10);
const PUBLIC_DIR = process.env.PUBLIC_DIR || path.join(__dirname, "public");
const AUTH_USER = process.env.AUTH_USER || "";
const AUTH_PASS = process.env.AUTH_PASS || "";
const AUTH_DISABLED = process.env.AUTH_DISABLED === "1";

const AUTH_MIN_USERNAME_LENGTH = 3;
const AUTH_MIN_PASSWORD_LENGTH = 16;

if (!AUTH_DISABLED) {
  if (AUTH_USER.length < AUTH_MIN_USERNAME_LENGTH) {
    console.error(`AUTH_USER is required (min ${AUTH_MIN_USERNAME_LENGTH} chars)`);
    process.exit(1);
  }
  if (AUTH_PASS.length < AUTH_MIN_PASSWORD_LENGTH) {
    console.error(`AUTH_PASS is required (min ${AUTH_MIN_PASSWORD_LENGTH} chars)`);
    process.exit(1);
  }
}

const EXPECTED_HEADER =
  "Basic " + Buffer.from(`${AUTH_USER}:${AUTH_PASS}`).toString("base64");

function timingSafeEq(a, b) {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  return ba.length === bb.length && crypto.timingSafeEqual(ba, bb);
}

// ---------- brute-force protection (in-memory, no deps) ----------
const FAIL_WINDOW_MS = 10 * 60 * 1000; // 10 min
const FAIL_THRESHOLD = 10;             // 10 failed attempts -> lock
const LOCK_MS = 15 * 60 * 1000;        // 15 min lock

const failureMap = new Map();

function clientKey(req) {
  return req.ip || (req.socket && req.socket.remoteAddress) || "unknown";
}

function isLocked(key) {
  const rec = failureMap.get(key);
  if (!rec) return false;
  if (Date.now() < rec.lockUntil) return true;
  failureMap.delete(key);
  return false;
}

function registerFailure(key) {
  const now = Date.now();
  const rec = failureMap.get(key) || { count: 0, windowStart: now, lockUntil: 0 };
  if (now - rec.windowStart > FAIL_WINDOW_MS) {
    rec.count = 0;
    rec.windowStart = now;
  }
  rec.count += 1;
  if (rec.count >= FAIL_THRESHOLD) {
    rec.lockUntil = now + LOCK_MS;
    rec.count = 0;
    console.warn(`[auth] too many failed attempts, locked ${key} until ${new Date(rec.lockUntil).toISOString()}`);
  }
  failureMap.set(key, rec);

  if (failureMap.size > 10000) {
    for (const k of failureMap.keys()) {
      const r = failureMap.get(k);
      if (now > r.windowStart + FAIL_WINDOW_MS + LOCK_MS) failureMap.delete(k);
    }
  }
}

function clearFailures(key) {
  failureMap.delete(key);
}

const app = express();
app.disable("x-powered-by");
app.set("trust proxy", 1); // TLS terminates at Traefik

// ---------- security headers ----------
app.use((req, res, next) => {
  res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "no-referrer");
  next();
});

// ---------- basic auth gate ----------
app.use((req, res, next) => {
  if (AUTH_DISABLED) return next();
  const key = clientKey(req);
  if (isLocked(key)) {
    res.setHeader("Retry-After", String(Math.ceil(LOCK_MS / 1000)));
    return res.status(429).json({ error: "Too many attempts. Try again later." });
  }
  if (timingSafeEq(req.headers.authorization || "", EXPECTED_HEADER)) {
    clearFailures(key);
    return next();
  }
  registerFailure(key);
  res.setHeader("WWW-Authenticate", 'Basic realm="kpbuilder", charset="UTF-8"');
  return res.status(401).json({ error: "Unauthorized" });
});

// ---------- identity for the app ----------
app.get("/api/me", (req, res) => {
  res.json({ name: AUTH_USER, email: `${AUTH_USER}@skorozvon.ru`, role: "basic" });
});

app.get("/logout", (req, res) => {
  res.setHeader("WWW-Authenticate", 'Basic realm="kpbuilder", charset="UTF-8"');
  res.status(401).send("Logged out. Reload the page to sign in again.");
});

// ---------- static ----------
app.use(express.static(PUBLIC_DIR, { extensions: ["html"], index: "index.html" }));

app.listen(PORT, () => {
  console.log(`proposal-builder listening on ${PORT}, auth=${AUTH_DISABLED ? "DISABLED" : "basic"}`);
});