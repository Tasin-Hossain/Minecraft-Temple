const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    user: {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      username: { type: String, required: true },
    },
    rating: { type: Number, min: 1, max: 5, required: true },
    title: { type: String, required: true, trim: true },
    comment: { type: String, required: true, trim: true },
    helpful: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const ChangelogSchema = new mongoose.Schema({
  version: { type: String, required: true },
  date: { type: String }, // e.g., "December 2025"
  changes: [{ type: String }],
  reactions: {
    type: Map,
    of: Number,
    default: () => new Map(),
  },
});

const VersionHistorySchema = new mongoose.Schema({
  version: { type: String, required: true },
  date: { type: String }, // e.g., "Friday at 4:33 PM"
  downloads: { type: Number, default: 0 },
});

const DependencySchema = new mongoose.Schema({
  name: { type: String, required: true },
  required: { type: Boolean, default: false },
  note: { type: String },
  url: { type: String },
});

const VersionSchema = new mongoose.Schema({
  _id: { type: String }, // custom id like "v1"
  version: { type: String, required: true },
  fileSize: { type: String },
});

const FAQSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

const ResourceSchema = new mongoose.Schema(
  {
    // Creator & Seller (usually same)
    creator: {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      username: { type: String, required: true },
      role: { type: String, default: "member" },
    },
    seller: {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      username: { type: String, required: true },
    },

    // Basic Info
    title: {
      type: String,
      required: [true, "Title is required"],
      maxlength: [100, "Title too long"],
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      trim: true,
    },
    shortDescription: {
      type: String,
      required: [true, "Short description is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Full description is required"],
    },

    // Category
    category: {
      type: String,
      required: true,
      enum: ["Minecraft", "Website", "Other"],
    },
    subCategory: {
      type: String,
      required: true,
    },

    // Media
    thumbnail: {
      type: String, // URL or filename
      required: [true, "Thumbnail is required"],
    },
    gallery: [
      {
        type: String, // image URLs
      },
    ],

    // Tags & Filtering
    tags: [{ type: String, trim: true }],

    types: [{ type: String }], // e.g., Premium, Spigot, etc.
    supportedVersions: [{ type: String }], // e.g., 1.20.x, 1.21.x
    supportedLanguages: [{ type: String }],

    configurationFor: { type: String }, // e.g., "EssentialsX", "LuckPerms"

    // Versions
    versions: [VersionSchema],
    versionsHistory: [VersionHistorySchema],

    // Dependencies & Requirements
    dependencies: [DependencySchema],
    requirements: [{ type: String }], // e.g., "Java 17", "4GB RAM"

    // FAQs
    faqs: [FAQSchema],

    // Changelog
    changelog: [ChangelogSchema],

    // Payment
    isFree: { type: Boolean, default: false },
    price: { type: Number, default: 0, min: 0 },
    currency: {
      type: String,
      enum: ["USD", "EUR", "GBP"],
      default: "USD",
    },

    // Permissions
    downloadPermissions: {
      roles: {
        type: [String],
        default: ["member"],
        enum: ["member", "premium", "admin", "buyer"],
      },
    },
    purchaseRequired: { type: Boolean, default: true },

    // Status & Approval
    status: {
      type: String,
      enum: ["draft", "published", "unlisted", "unpublished"],
      default: "draft",
    },
    approvedStatus: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    approvedBy: {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      username: { type: String },
    },
    approvedAt: { type: Date },

    // Stats
    stats: {
      views: { type: Number, default: 0 },
      downloads: { type: Number, default: 0 },
      purchases: { type: Number, default: 0 },
      rating: { type: Number, default: 0, min: 0, max: 5 },
      reviews: { type: Number, default: 0 },
    },

    // Reactions (on resource)
    reactions: {
      type: Map,
      of: Number,
      default: () => new Map(),
    },

    // Reviews
    reviews: [ReviewSchema],

    // File (main resource file)
    resourceFile: {
      type: String,
      required: [true, "Resource file is required"],
    },

    // Ownership transfer
    newOwner: { type: String, trim: true, default: "" },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

// Auto-generate slug from title
ResourceSchema.pre("save", function (next) {
  if (!this.slug || this.isModified("title")) {
    this.slug = this.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  }
  next();
});

// Virtuals for URLs (if files are stored locally)
ResourceSchema.virtual("thumbnailUrl").get(function () {
  return this.thumbnail.startsWith("http")
    ? this.thumbnail
    : `/uploads/thumbnails/${this.thumbnail}`;
});

ResourceSchema.virtual("resourceFileUrl").get(function () {
  return this.resourceFile.startsWith("http")
    ? this.resourceFile
    : `/uploads/resources/${this.resourceFile}`;
});

module.exports = mongoose.model("Resource", ResourceSchema);