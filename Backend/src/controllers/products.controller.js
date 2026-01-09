import Product from "../models/Product.js";

/* ---------------- CREATE PRODUCT ---------------- */
export const createProduct = async (req, res) => {
  try {
    const product = await Product.create({
      ...req.body,
      seller: req.user._id,
      creator: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/* ---------------- GET ALL PRODUCTS (FILTER + SEARCH + PAGINATION) ---------------- */
export const getAllProducts = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search,
      category,
      subCategory,
      status = "approved",
      minPrice,
      maxPrice,
      isFree,
      seller,
      sort = "-createdAt",
    } = req.query;

    const query = {};

    if (status) query.status = status;
    if (category) query.category = category;
    if (subCategory) query.subCategory = subCategory;
    if (seller) query.seller = seller;

    if (isFree !== undefined) {
      query.isFree = isFree === "true";
    }

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    if (search) {
      query.$text = { $search: search };
    }

    const products = await Product.find(query)
      .populate("seller", "username avatar")
      .populate("creator", "username")
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Product.countDocuments(query);

    res.json({
      success: true,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ---------------- GET SINGLE PRODUCT ---------------- */
export const getProductBySlug = async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug })
      .populate("seller", "username avatar")
      .populate("creator", "username")
      .populate("versions")
      .populate("faqs")
      .populate("requirements")
      .populate("supportThread");

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Increase views
    product.stats.views += 1;
    await product.save();

    res.json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ---------------- UPDATE PRODUCT ---------------- */
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product)
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });

    // Owner or Admin check
    if (
      product.seller.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    Object.assign(product, req.body);
    await product.save();

    res.json({
      success: true,
      message: "Product updated",
      product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/* ---------------- DELETE PRODUCT ---------------- */
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product)
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });

    if (
      product.seller.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    await product.deleteOne();

    res.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ---------------- UPDATE STATS (DOWNLOAD / PURCHASE) ---------------- */
export const updateProductStats = async (req, res) => {
  try {
    const { type } = req.body; // download | purchase | review

    const updates = {
      download: { "stats.downloads": 1 },
      purchase: { "stats.purchases": 1 },
      review: { "stats.reviews": 1 },
    };

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { $inc: updates[type] || {} },
      { new: true }
    );

    res.json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/* ---------------- ADMIN APPROVE / REJECT PRODUCT ---------------- */
export const adminUpdateProductStatus = async (req, res) => {
  try {
    const { status, rejectionReason } = req.body;

    if (!["approved", "rejected", "pending"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status",
      });
    }

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    product.status = status;

    if (status === "approved") {
      product.approvedBy = req.user._id;
      product.approvedAt = new Date();
      product.rejectionReason = undefined;
    }

    if (status === "rejected") {
      product.rejectionReason = rejectionReason || "Not specified";
    }

    await product.save();

    res.json({
      success: true,
      message: `Product ${status} successfully`,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
