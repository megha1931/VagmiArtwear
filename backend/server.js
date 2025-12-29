import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";





connectDB();

const app = express();
app.use(cors({
  origin: "http://localhost:5173", // 🔥 EXACT frontend URL
  credentials: true                // 🔥 REQUIRED for cookies
}));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/payment", paymentRoutes);




app.listen(5000, () => console.log("Server running on 5000"));
