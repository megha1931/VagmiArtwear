import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { adminLogin } from "../services/authApi";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    const res = await adminLogin({ email, password });
    login(res.token, res.user); // role = admin
    navigate("/admin");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🌌 Dark Web3 Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#000000]" />

      {/* Ambient glow */}
      <div className="absolute top-[-30%] left-[-20%] w-[600px] h-[600px] bg-[#ffddb0]/10 rounded-full blur-[160px] animate-pulse" />
      <div className="absolute bottom-[-30%] right-[-20%] w-[600px] h-[600px] bg-[#ffffff]/5 rounded-full blur-[160px] animate-pulse delay-1000" />

      {/* 🔐 Admin Card */}
      <form
        onSubmit={submit}
        className="
          w-full max-w-md
          bg-white/10 backdrop-blur-2xl
          border border-white/20
          rounded-3xl
          p-10
          shadow-[0_40px_80px_rgba(0,0,0,0.6)]
          space-y-6
        "
      >
        {/* Logo */}
        <div className="flex justify-center">
          <div
            className="
              p-4 rounded-3xl
              bg-white/20 backdrop-blur
              border border-white/20
              shadow-md
              hover:shadow-[0_0_40px_rgba(255,200,150,0.4)]
              transition duration-500
            "
          >
            <img
              src="https://res.cloudinary.com/dc4siqnjp/image/upload/v1766659690/Vagmi_logo_pbevi9.png"
              alt="Vagmi Admin"
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-serif text-white mb-1">
            Admin Access
          </h2>
          <p className="text-sm text-gray-300">
            Authorized personnel only
          </p>
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="
              w-full px-4 py-3 rounded-xl
              bg-white/20 text-white placeholder-gray-300
              border border-white/20
              focus:outline-none
              focus:ring-2 focus:ring-white/30
              transition
            "
          />
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="
              w-full px-4 py-3 rounded-xl
              bg-white/20 text-white placeholder-gray-300
              border border-white/20
              focus:outline-none
              focus:ring-2 focus:ring-white/30
              transition
            "
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            w-full py-3 rounded-full
            bg-white text-black
            font-medium tracking-wide
            hover:bg-gray-100
            hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]
            transition duration-300
          "
        >
          Enter Admin Panel →
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
