import Razorpay from "razorpay";

/**
 * Create Razorpay instance ONLY when called
 * Prevents env loading crash
 */
export const getRazorpayInstance = () => {
  if (!process.env.RAZORPAY_KEY_ID) {
    throw new Error("Razorpay Key ID missing");
  }

  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
};


