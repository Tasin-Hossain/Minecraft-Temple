const productMetaSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      unique: true,
    },

    requirements: [String], // Java, Minecraft version etc

    supportedPlatforms: [String],

    documentationUrl: String,

    demoUrl: String,
  },
  { timestamps: true }
);

export default mongoose.model("ProductMeta", productMetaSchema);
