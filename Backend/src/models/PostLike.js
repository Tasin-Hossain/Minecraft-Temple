const postLikeSchema = new mongoose.Schema(
  {
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

postLikeSchema.index({ post: 1, user: 1 }, { unique: true });

export default mongoose.model("PostLike", postLikeSchema);
