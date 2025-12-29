import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import OrderForm from "../components/OrderForm";
import { useAuth } from "../context/AuthContext";
import BackButton from "../components/BackButton";

function ProductCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  const API_BASE = import.meta.env.VITE_API_URL;
  const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showOrderForm, setShowOrderForm] = useState(false);

  /* 🔹 Fetch product */
  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`${API_BASE}/api/products/${id}`);
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id, API_BASE]);

  /* 🔥 Create order + open Razorpay */
  const handleConfirmOrder = async (formData) => {
    setShowOrderForm(false);

    if (!token) {
      alert("Please login to continue");
      navigate("/user-login");
      return;
    }

    /* 1️⃣ Create Razorpay order (BACKEND ONLY) */
    const res = await fetch(`${API_BASE}/api/payment/create-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        amount: product.price,
        productId: product._id,
        orderDetails: formData,
      }),
    });

    const order = await res.json();

    /* 2️⃣ Open Razorpay Checkout */
    const options = {
      key: RAZORPAY_KEY,
      amount: order.amount,
      currency: "INR",
      name: "Vagmi Art Wear",
      description: product.name,
      order_id: order.id,

      handler: async function (response) {
        /* 3️⃣ Verify payment on backend */
        await fetch(`${API_BASE}/api/payment/verify`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...response,
            productId: product._id,
            orderDetails: formData,
          }),
        });

        alert("Payment successful 🎉");
      },

      theme: { color: "#000000" },
    };

    new window.Razorpay(options).open();
  };

  /* 🔹 UI states */
  if (loading)
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-600 animate-pulse">Loading product…</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-red-600">{error}</p>
      </div>
    );

  return (
    <div className="relative overflow-hidden">
      {/* 🌈 Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-30%] left-[-20%] w-[500px] h-[500px] bg-[#ffe0b2]/50 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-30%] right-[-20%] w-[500px] h-[500px] bg-[#fff1df]/60 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#fffaf3] via-[#fff1df] to-white" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <BackButton fallback="/products" />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="rounded-3xl overflow-hidden bg-white/60 backdrop-blur border border-black/10 shadow-xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[460px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

          {/* Info */}
          <div className="p-10 rounded-3xl bg-white/60 backdrop-blur border border-black/10 shadow-lg">
            <h1 className="text-4xl font-serif text-gray-900 mb-4">
              {product.name}
            </h1>

            <p className="text-gray-700 leading-relaxed mb-8">
              {product.description}
            </p>

            <button
              onClick={() => setShowOrderForm(true)}
              className="px-10 py-4 rounded-full bg-black text-white hover:bg-gray-900 transition"
            >
              Buy Now →
            </button>
          </div>
        </div>

        {showOrderForm && (
          <OrderForm
            product={product}
            onClose={() => setShowOrderForm(false)}
            onConfirm={handleConfirmOrder}
          />
        )}
      </div>
    </div>
  );
}

export default ProductCard;
