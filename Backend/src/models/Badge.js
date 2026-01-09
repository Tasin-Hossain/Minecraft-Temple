import mongoose from "mongoose";

const badgeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    icon: { type: String }, // image url
    description: String,
  },
  { timestamps: true }
);

export default mongoose.model("Badge", badgeSchema);
