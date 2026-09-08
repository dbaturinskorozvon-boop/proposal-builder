/**
 * proposal-builder — внутренний контур, HTTP Basic auth
 *
 * Статика конструктора раздаётся этим сервером; весь доступ закрыт
 * простой basic-авторизацией (возврат к SSO Naumen — когда ИТ
 * зарегистрируют OIDC-клиент в Keycloak).
 *
 * Конфигурация через переменные окружения:
 *   PORT         — порт (default 8000)
 *   PUBLIC_DIR   — каталог со статикой (default ./public)
 *   AUTH_USER    — логин basic-auth (default admin)
 *   AUTH_PASS    — пароль basic-auth (обязателен, кроме AUTH_DISABLED)
 *   AUTH_DISABLED— =1 отключает авторизацию (только локальная отладка)
 */
const path = require("path");
const crypto = require("crypto");
const express = require("express");

const PORT = parseInt(process.env.PORT || "8000", 10);
const PUBLIC_DIR = process.env.PUBLIC_DIR || path.join(__dirname, "public");
const AUTH_USER = process.env.AUTH_USER || "admin";
const AUTH_PASS = process.env.AUTH_PASS || "";
const AUTH_DISABLED = process.env.AUTH_DISABLED === "1";

if (!AUTH_DISABLED && !AUTH_PASS) {
  console.error("AUTH_PASS is required (or set AUTH_DISABLED=1 for local dev)");
  process.exit(1);
}

const EXPECTED_HEADER =
  "Basic " + Buffer.from(`${AUTH_USER}:${AUTH_PASS}`).toString("base64");

function timingSafeEq(a, b) {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  return ba.length === bb.length && crypto.timingSafeEqual(ba, bb);
}

const app = express();
app.disable("x-powered-by");
app.set("trust proxy", 1); // TLS terminates at Traefik

// ---------- basic auth gate ----------
app.use((req, res, next) => {
  if (AUTH_DISABLED || timingSafeEq(req.headers.authorization || "", EXPECTED_HEADER)) {
    return next();
  }
  res.setHeader("WWW-Authenticate", 'Basic realm="kpbuilder", charset="UTF-8"');
  res.status(401).json({ error: "Unauthorized" });
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