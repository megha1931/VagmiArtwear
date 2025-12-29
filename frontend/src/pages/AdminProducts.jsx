import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getProducts, deleteProduct } from "../services/productApi";
import BackButton from "../components/BackButton";

function AdminProducts() {
  const { token } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    try {
      await deleteProduct(id, token);
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-300">
        Loading products…
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-400">
        {error}
      </div>
    );

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* 🌌 Dark Admin Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-black" />
      <div className="absolute top-[-30%] left-[-20%] w-[600px] h-[600px] bg-[#ffddb0]/10 rounded-full blur-[160px] animate-pulse" />
      <div className="absolute bottom-[-30%] right-[-20%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[160px] animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <BackButton fallback="/admin" />
      <button
  onClick={() => console.log("CLICK WORKS")}
  className="border px-4 py-2"
>
  Test Click
</button>
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-serif text-white mb-3">
            Manage Products
          </h1>
          <p className="text-gray-300">
            View, review, and remove products from Vagmi Art Wear
          </p>
        </div>

        {products.length === 0 && (
          <p className="text-center text-gray-400">
            No products found.
          </p>
        )}

        {/* 🛍️ Admin Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div
              key={product._id}
              className="
                group relative
                rounded-3xl overflow-hidden
                bg-white/10 backdrop-blur-xl
                border border-white/20
                shadow-[0_20px_40px_rgba(0,0,0,0.6)]
                hover:shadow-[0_30px_60px_rgba(0,0,0,0.8)]
                transition duration-500
              "
            >
              {/* ❌ Delete */}
              <button
                onClick={() => handleDelete(product._id)}
                className="
                  absolute top-4 right-4 z-10
                  px-3 py-1 rounded-full
                  bg-red-600/90 text-white text-xs
                  hover:bg-red-700
                  transition
                "
              >
                Delete
              </button>

              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-110
                    transition duration-700
                  "
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-medium text-white mb-1">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-300 line-clamp-2">
                  {product.description}
                </p>

                <p className="mt-3 text-white font-semibold">
                  ₹ {product.price}
                </p>
              </div>

              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none
                              group-hover:shadow-[inset_0_0_40px_rgba(255,200,150,0.2)]
                              transition duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminProducts;
