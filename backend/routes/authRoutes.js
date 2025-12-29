import express from "express";
import { register, login,adminLogin,getProfile,adminLogout } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/user-login", login);
router.post("/admin/login", adminLogin);
// routes/authRoutes.js
router.get("/profile", protect, getProfile);
router.post("/admin/logout", adminLogout);



export default router;
