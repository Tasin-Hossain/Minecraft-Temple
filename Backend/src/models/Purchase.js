const purchaseSchema = new mongoose.Schema(
  {
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    product: { type: ObjectId, ref: "Product", required: true },
    version: { type: ObjectId, ref: "ProductVersion" },

    price: Number,

    status: {
      type: String,
      enum: ["completed", "refunded"],
      default: "completed",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Purchase", purchaseSchema);
