import mongoose from "mongoose";

const TwoFASchema = new mongoose.Schema({
  enabled: { type: Boolean, default: false },
  secret: { type: String, default: "" }, 
});

const RefreshTokenSchema = new mongoose.Schema({
  tokenHash: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  userAgent: { type: String },
  ip: { type: String },
});

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    avatar: { type: String, default: "" },
    role: { type: String, enum: ["member", "moderator", "admin"], default: "member" },
    status: { type: String, enum: ["active", "banned", "suspended"], default: "active" },
    isLoggedIn: { type: Boolean, default: false },

    // email verification
    isVerified: { type: Boolean, default: false },
    emailVerificationToken: { type: String, default: null },
    emailVerificationTokenExpires: { type: Date, default: null },

    // 2FA
    twoFactor: { type: TwoFASchema, default: () => ({}) },

    // refresh tokens
    refreshTokens: { type: [RefreshTokenSchema], default: [] },

    balance: { type: Number, default: 0 },
    badges: [{ type: mongoose.Schema.Types.ObjectId, ref: "Badge" }],
    lastLogin: Date,
    twoFactorEnabled: { type: Boolean, default: false },

    // 🟨 NEW FIELDS (Based on your image)
    receiveUpdates: { type: Boolean, default: false },  
    agreedToTerms: { type: Boolean, default: false },
    stayLoggedIn: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
