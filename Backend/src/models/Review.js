// models/Review.js

import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },


    rating: {
      type: Number,
      required: true,
      min: [1, "Rating must be at least 1"],
      max: [5, "Rating cannot be more than 5"],
    },

    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: [100, "Title cannot exceed 100 characters"],
    },


    comment: {
      type: String,
      required: true,
      trim: true,
      maxlength: [1000, "Comment cannot exceed 1000 characters"],
    },


    helpful: {
      type: Number,
      default: 0,
    },

    helpfulVotes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true, // createdAt & updatedAt অটোমেটিক যোগ হবে
  }
);

// ইউনিক রিভিউ প্রিভেন্ট করা (একই ইউজার একই প্রোডাক্টে একাধিক রিভিউ দিতে পারবে না)
reviewSchema.index({ product: 1, user: 1 }, { unique: true });

export default mongoose.model("Review", reviewSchema);