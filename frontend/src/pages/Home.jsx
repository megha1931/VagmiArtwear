import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative overflow-hidden">

      {/* 🌈 Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-30%] left-[-20%] w-[600px] h-[600px] bg-[#ffe0b2]/50 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-30%] right-[-20%] w-[600px] h-[600px] bg-[#fff1df]/60 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#fffaf3] via-[#fff1df] to-[#ffffff]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* 🌸 HERO SECTION */}
        <div className="text-center flex flex-col items-center">

          {/* Logo */}
          <div
            className="
              mb-8 p-4 rounded-3xl
              bg-white/60 backdrop-blur
              border border-black/10
              shadow-lg
              hover:shadow-[0_0_40px_rgba(255,200,150,0.6)]
              transition duration-500
            "
          >
            <img
              src="https://res.cloudinary.com/dc4siqnjp/image/upload/v1766659690/Vagmi_logo_pbevi9.png"
              alt="Vagmi Art Wear"
              className="w-28 h-28 object-contain"
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-serif tracking-wide text-gray-900 mb-6">
            Feel the Art in <br />
            <span className="text-black">Every Wear</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-700 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Vagmi Art Wear brings hand-printed designs crafted with love,
            culture, and creativity — blending tradition with modern elegance.
          </p>

          {/* CTA */}
          <Link
            to="/products"
            className="
              inline-flex items-center gap-2
              px-10 py-4 rounded-full
              bg-black text-white
              text-sm tracking-wide
              hover:bg-gray-900
              hover:shadow-[0_0_30px_rgba(0,0,0,0.4)]
              transition duration-300
            "
          >
            Explore Collection →
          </Link>
        </div>

        {/* ✨ FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-32">

          {[
            {
              title: "Artisan Quality",
              desc: "Each piece is hand-printed with attention to detail and craftsmanship."
            },
            {
              title: "Thoughtful Delivery",
              desc: "Carefully packaged and delivered with love to your doorstep."
            },
            {
              title: "Secure Experience",
              desc: "Safe payments and trusted shopping experience."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="
                relative p-8 rounded-2xl
                bg-white/60 backdrop-blur
                border border-black/10
                text-center
                shadow-md
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
                hover:-translate-y-2
                transition duration-500
              "
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Home;
