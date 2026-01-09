import express from "express";
import {
  register,
  verifyEmail,
  login,
  verify2fa,
  enable2fa,
  confirmEnable2fa,
  disable2fa,
  refreshAccessToken,
  logout,
  refreshChecker,
  resendVerificationEmail,
} from "../controllers/auth.controller.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/verify-email", verifyEmail); // GET with token & id
router.post("/resend-verification", resendVerificationEmail);

// protected 2FA actions
router.post("/2fa/enable", protect, enable2fa); // returns QR + secret
router.post("/2fa/enable/confirm", protect, confirmEnable2fa); // confirm with code
router.post("/2fa/verify",verify2fa);
router.post("/2fa/disable", protect, disable2fa);

router.post("/refresh", refreshAccessToken);
router.get("/check-token", refreshChecker);

router.post("/logout",protect, logout);

export default router;
