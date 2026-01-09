import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import { authLimiter, loginLimiter } from "./middlewares/rateLimiter.js";

const app = express();
// Primary CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// Preflight Fix (safe for Express 5)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});
app.use(express.json());
app.use(cookieParser());

// Apply authLimiter to all auth routes (register, verify-email, etc.)
app.use("/api/auth", authRoutes);

// Apply stricter limiter on login route specifically inside routes:
// Alternatively you can mount loginLimiter on the POST /login route inside authRoutes

app.get("/", (req, res) => res.json({ ok: true }));

export default app;
