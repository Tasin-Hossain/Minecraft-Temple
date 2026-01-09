import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductBySlug,
  updateProduct,
  deleteProduct,
  updateProductStats,
} from "../controllers/product.controller.js";
import { protect } from "../middlewares/authMiddleware.js";


const router = express.Router();

/* PUBLIC */
router.get("/", getAllProducts);
router.get("/:slug", getProductBySlug);

/* AUTH REQUIRED */
router.post("/", protect, createProduct);
router.put("/:id", protect, updateProduct);
router.delete("/:id", protect, deleteProduct);

/* STATS */
router.patch("/:id/stats", protect, updateProductStats);

// router.patch(
//   "/admin/:id/status",
//   protect,
//   allowRoles("admin"),
//   adminUpdateProductStatus
// );

export default router;
