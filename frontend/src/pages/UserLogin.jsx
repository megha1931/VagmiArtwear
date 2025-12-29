import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { userLogin } from "../services/authApi";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const res = await userLogin({ email, password });

    login(res.token, res.user);

    if (res.user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🌈 Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-30%] left-[-20%] w-[600px] h-[600px] bg-[#ffe0b2]/50 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-30%] right-[-20%] w-[600px] h-[600px] bg-[#fff1df]/60 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#fffaf3] via-[#fff1df] to-white" />
      </div>

      {/* 🌸 Login Card */}
      <form
        onSubmit={submit}
        className="
          w-full max-w-md
          bg-white/60 backdrop-blur-xl
          border border-black/10
          rounded-3xl
          p-10
          shadow-[0_30px_60px_rgba(0,0,0,0.15)]
          space-y-6
        "
      >
        {/* Logo */}
        <div className="flex justify-center">
          <div
            className="
              p-4 rounded-3xl
              bg-white/70 backdrop-blur
              border border-black/10
              shadow-md
              hover:shadow-[0_0_40px_rgba(255,200,150,0.6)]
              transition duration-500
            "
          >
            <img
              src="https://res.cloudinary.com/dc4siqnjp/image/upload/v1766659690/Vagmi_logo_pbevi9.png"
              alt="Vagmi Art Wear"
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-serif text-gray-900 mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-700 text-sm">
            Sign in to continue your journey with Vagmi
          </p>
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="
              w-full px-4 py-3 rounded-xl
              bg-white/80
              border border-black/10
              focus:outline-none
              focus:ring-2 focus:ring-black/30
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
              bg-white/80
              border border-black/10
              focus:outline-none
              focus:ring-2 focus:ring-black/30
              transition
            "
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            w-full py-3 rounded-full
            bg-black text-white
            tracking-wide
            hover:bg-gray-900
            hover:shadow-[0_0_35px_rgba(0,0,0,0.4)]
            transition duration-300
          "
        >
          Login →
        </button>

        {/* Register link */}
        <p className="text-sm text-center text-gray-700">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-black hover:underline"
          >
            Create one
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
