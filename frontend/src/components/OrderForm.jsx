import { useState } from "react";

function OrderForm({ product, onClose, onConfirm }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
    size: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.address ||
      !form.pincode ||
      !form.size
    ) {
      alert("Please fill all fields");
      return;
    }

    onConfirm(form); // 🔥 send data to ProductCard
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            Buy {product.name}
          </h2>
          <button onClick={onClose} className="text-gray-500">
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            placeholder="Receiver Name"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Mobile Number"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          />

          <input
            name="address"
            placeholder="Address"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          />

          <input
            name="pincode"
            placeholder="Pincode"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          />

          <select
            name="size"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          >
            <option value="">Select Size</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
          </select>

          {/* Footer */}
          <div className="flex justify-between items-center mt-4">
            <span className="font-semibold text-lg">
              ₹ {product.price || 999}
            </span>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              Proceed to Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderForm;
