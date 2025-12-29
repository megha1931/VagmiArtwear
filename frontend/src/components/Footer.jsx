import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="
        relative mt-20
        bg-gradient-to-r from-[#fff1df] via-[#f7e2c3] to-[#fff1df]
        border-t border-black/10
        overflow-hidden
      "
    >
      {/* 🌸 Ambient background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-40%] left-[-20%] w-[500px] h-[500px] bg-[#ffd9a3]/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-40%] right-[-20%] w-[500px] h-[500px] bg-[#ffe6c4]/40 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* 🔹 Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif tracking-wide text-gray-900">
              VAGMI
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed max-w-sm">
              Feel the art in every wear. Hand-printed designs crafted with
              love, culture, and creativity.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Shop</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>
                <Link
                  to="/products"
                  className="relative hover:text-black transition
                             after:absolute after:left-0 after:-bottom-1
                             after:h-[1px] after:w-0 after:bg-black
                             hover:after:w-full after:transition-all"
                >
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>
                <Link
                  to="/contact"
                  className="relative hover:text-black transition
                             after:absolute after:left-0 after:-bottom-1
                             after:h-[1px] after:w-0 after:bg-black
                             hover:after:w-full after:transition-all"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Connect</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              📧 vagmiartwear@gmail.com.com
              <br />
              📍 India
            </p>

            <div className="flex space-x-6 mt-4">
              <a
                href="https://www.instagram.com/vagmi_artwear/?igsh=NjFhOGMzYTE3ZQ%3D%3D#"
                className="text-sm text-gray-800 hover:text-black
                           transition hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]"
              >
                Instagram
              </a>
            </div>
          </div>

        </div>

        {/* 🔹 Bottom */}
        <div className="mt-14 pt-6 border-t border-black/10
                        flex flex-col md:flex-row
                        justify-between items-center
                        text-sm text-gray-700">
          <p>
            © {new Date().getFullYear()} Vagmi Art Wear. All rights reserved.
          </p>
          <p className="mt-3 md:mt-0 italic opacity-80">
            Designed with ❤️ in India
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
