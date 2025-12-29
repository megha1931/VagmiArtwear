import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    customer: {
      name: String,
      email: String,
      phone: String,
      address: String,
      pincode: String,
      size: String,
    },
    paymentId: String,
    orderId: String,
    status: {
      type: String,
      default: "paid",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
