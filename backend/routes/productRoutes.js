import express from "express";
import { createProduct, getProducts,getProductById,deleteProduct } from "../controllers/productController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", protect, adminOnly, createProduct);
router.get("/:id", getProductById);
router.delete("/:id", protect, adminOnly, deleteProduct);

export default router;
