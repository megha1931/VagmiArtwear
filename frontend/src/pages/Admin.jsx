import { useState } from "react";
import { createProduct } from "../services/productApi";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AdminLogoutButton from "../components/AdminLogoutButton";
function Admin() {
  const { token } = useAuth(); // 🔥 GET JWT TOKEN
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      name: form.name,
      description: form.description,
      image: form.image,
      price: Number(form.price),
    };

    try {
      setLoading(true);
      await createProduct(productData, token);
      setMessage("✅ Product added successfully");

      setForm({
        name: "",
        description: "",
        image: "",
        price: "",
      });
    } catch (error) {
      setMessage("❌ " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      <div className="bg-white w-full max-w-xl p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Admin – Add Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Name */}
          <input
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Product Description"
            value={form.description}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Image */}
          <input
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Price */}
          <input
            name="price"
            placeholder="Product Price"
            type="number"
            value={form.price}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Submit */}
          <button
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition disabled:opacity-60"
          >
            {loading ? "Saving..." : "Add Product"}
          </button>
          <button
            onClick={() => navigate("api/auth/admin/products")}
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition disabled:opacity-60"
          >
            Manage Products
          </button>
          
        </form>
       <AdminLogoutButton />
        {/* Message */}
        {message && <p className="mt-4 text-center font-medium">{message}</p>}
      </div>
    </div>
  );
}

export default Admin;
