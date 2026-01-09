const postSchema = new mongoose.Schema(
  {
    thread: { type: mongoose.Schema.Types.ObjectId, ref: "Thread" },

    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    content: { type: String, required: true },

    editedAt: Date,
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);
