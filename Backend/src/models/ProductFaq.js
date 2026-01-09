const productFaqSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },

    question: String,
    answer: String,
  },
  { timestamps: true }
);

export default mongoose.model("ProductFaq", productFaqSchema);
