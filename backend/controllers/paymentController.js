import dotenv from "dotenv";
dotenv.config();
import crypto from "crypto";
import Order from "../models/Order.js";
import Product from "../models/Product.js";
import { sendOrderEmail } from "../utils/sendEmail.js";
import { getRazorpayInstance } from "../config/razorpay.js";

/* ================================
   CREATE RAZORPAY ORDER
================================ */
export const createOrder = async (req, res) => {
  try {
    const razorpay = getRazorpayInstance();

    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100, // INR → paisa
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

/* ================================
   VERIFY PAYMENT
================================ */
export const verifyPayment = async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    productId,
    orderDetails,
  } = req.body;

  /* 🔐 Verify signature */
  const sign = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSign = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(sign)
    .digest("hex");

  if (expectedSign !== razorpay_signature) {
    return res.status(400).json({ message: "Payment verification failed" });
  }

  /* 📦 Save order */
  const product = await Product.findById(productId);

  const order = await Order.create({
    productId,
    customer: orderDetails,
    paymentId: razorpay_payment_id,
    orderId: razorpay_order_id,
  });

  /* ✉️ Send emails */
  await sendOrderEmail(order, product);

  res.json({ message: "Payment verified & order placed" });
};
