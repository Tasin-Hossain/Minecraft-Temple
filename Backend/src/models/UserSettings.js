const userSettingsSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", unique: true },

    darkMode: { type: Boolean, default: false },
    emailNotifications: { type: Boolean, default: true },
    hideOnlineStatus: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("UserSettings", userSettingsSchema);
