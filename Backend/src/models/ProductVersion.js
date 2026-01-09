import mongoose from "mongoose";

const productVersionSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    version: { type: String, required: true },

    changelog: { type: String },

    file: {
      name: String,
      size: Number,
      mimeType: String,
      storage: {
        type: String,
        enum: ["s3", "cloudinary", "local"],
      },
      url: String, // ❗ NEVER expose directly
    },

    compatibility: [String], // e.g. MC 1.20.x

    isLatest: { type: Boolean, default: false },
  },
  { timestamps: true }
);

/* ✅ INDEX HERE */
productVersionSchema.index({
  productId: 1,
  isLatest: 1,
});

export default mongoose.model("ProductVersion", productVersionSchema);
