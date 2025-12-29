function Contact() {
  return (
    <div className="relative overflow-hidden">

      {/* 🌈 Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-30%] left-[-20%] w-[600px] h-[600px] bg-[#ffe0b2]/50 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-30%] right-[-20%] w-[600px] h-[600px] bg-[#fff1df]/60 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#fffaf3] via-[#fff1df] to-white" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* 🌸 Title */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif tracking-wide text-gray-900 mb-4">
            The Story Behind Vagmi
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Vagmi Art Wear is more than clothing — it is a story of art, identity,
            and the courage to build something meaningful.
          </p>
        </div>

        {/* 🌿 Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* 👤 Founder */}
          <div
            className="
              p-10 rounded-3xl
              bg-white/60 backdrop-blur
              border border-black/10
              shadow-lg
            "
          >
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <img
                src="https://res.cloudinary.com/dc4siqnjp/image/upload/v1766659690/Vagmi_logo_pbevi9.png"
                alt="Founder"
                className="
                  w-48 h-48 rounded-full object-cover
                  shadow-[0_20px_40px_rgba(0,0,0,0.15)]
                  mb-6
                "
              />

              <h2 className="text-2xl font-serif text-gray-900">
                Naineeka Thakur
              </h2>

              <p className="text-gray-600 mt-1 italic">
                Founder, Vagmi Art Wear
              </p>

              <p className="text-gray-700 mt-6 leading-relaxed">
                Vagmi was born from a deep appreciation for handcrafted art and
                the desire to preserve creativity in a fast-moving world.
                Every design reflects patience, emotion, and authenticity —
                values that are slowly disappearing in mass production.
              </p>
            </div>
          </div>

          {/* 🌱 Dream + Location */}
          <div
            className="
              p-10 rounded-3xl
              bg-white/60 backdrop-blur
              border border-black/10
              shadow-lg
            "
          >
            <h3 className="text-2xl font-serif text-gray-900 mb-4">
              🌱 The Dream Behind Vagmi
            </h3>

            <p className="text-gray-700 leading-relaxed mb-8">
              The dream behind Vagmi is simple yet powerful — to give hand-printed
              art the respect it deserves. Each piece is meant to make the wearer
              feel connected to culture, craft, and individuality.
              Vagmi stands for slow fashion, thoughtful creation, and meaningful
              expression.
            </p>

            <div className="border-t border-black/10 pt-6 space-y-3">
              <p className="text-gray-800 font-medium">
                📍 Location
              </p>
              <p className="text-gray-600">
                Dewas, Madhya Pradesh, India
              </p>

              <p className="text-gray-800 font-medium pt-4">
                📧 7224885201
              </p>
              <p className="text-gray-600">
                vagmiartwear@gmail.com.com
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
