const threadSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },

    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    likes: [{ type: ObjectId, ref: "PostLike" }],
    category: { type: String, required: true },

    isLocked: { type: Boolean, default: false },
    isPinned: { type: Boolean, default: false },

    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Thread", threadSchema);
