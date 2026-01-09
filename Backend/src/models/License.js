const licenseSchema = new mongoose.Schema(
  {
    key: { type: String, unique: true },

   product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },

    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    status: {
      type: String,
      enum: ["active", "revoked"],
      default: "active",
    },
  },
  { timestamps: true }
);

export default mongoose.model("License", licenseSchema);
