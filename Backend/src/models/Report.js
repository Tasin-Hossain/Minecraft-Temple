const reportSchema = new mongoose.Schema(
  {
    reporter: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    post: { type: ObjectId, ref: "Post" },
    product: { type: ObjectId, ref: "Product" },

    targetType: {
      type: String,
      enum: ["post", "thread", "user", "review"],
    },

    targetId: mongoose.Schema.Types.ObjectId,

    reason: String,

    status: {
      type: String,
      enum: ["open", "resolved"],
      default: "open",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Report", reportSchema);
