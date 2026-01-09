const withdrawalSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    amount: { type: Number, required: true },

    method: {
      type: String,
      enum: ["paypal", "crypto", "bank"],
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Withdrawal", withdrawalSchema);
