import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../services/productApi";

function Products() {
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

  /* 🔄 Loading State */
  if (loading)
    return (
      <div className="relative min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-600 text-lg animate-pulse">
          Loading curated pieces…
        </p>
      </div>
    );

  /* ❌ Error State */
  if (error)
    return (
      <div className="relative min-h-[60vh] flex items-center justify-center">
        <p className="text-red-600 text-lg">{error}</p>
      </div>
    );

  return (
    <div className="relative overflow-hidden">

      {/* 🌈 Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-25%] left-[-15%] w-[500px] h-[500px] bg-[#ffe0b2]/50 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-25%] right-[-15%] w-[500px] h-[500px] bg-[#fff1df]/60 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#fffaf3] via-[#fff1df] to-[#ffffff]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* 🖋️ Heading */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl md:text-5xl font-serif tracking-wide text-gray-900 mb-4">
            Our Collection
          </h1>
          <p className="text-gray-700 max-w-xl mx-auto">
            Discover hand-crafted designs that blend tradition with modern elegance.
          </p>
        </div>

        {products.length === 0 && (
          <p className="text-center text-gray-500">
            No products available
          </p>
        )}

        {/* 🛍️ Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {products.map((product) => (
            <Link
              key={product._id}
              to={`/products/${product._id}`}
              className="
                group relative
                rounded-2xl overflow-hidden
                bg-white/60 backdrop-blur
                border border-black/10
                shadow-md
                hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)]
                hover:-translate-y-2
                transition duration-500
              "
            >
              {/* 🖼️ Image */}
              <div className="relative w-full h-60 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-110
                    transition duration-700
                  "
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition" />
              </div>

              {/* 📄 Content */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 italic">
                  Hand-crafted elegance
                </p>
              </div>

              {/* ✨ Hover Glow */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none 
                              group-hover:shadow-[inset_0_0_40px_rgba(255,200,150,0.4)]
                              transition duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
