import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/user-login");
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 animate-pulse">
          Loading your profile…
        </p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* 🌈 Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-30%] left-[-20%] w-[600px] h-[600px] bg-[#ffe0b2]/50 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-30%] right-[-20%] w-[600px] h-[600px] bg-[#fff1df]/60 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#fffaf3] via-[#fff1df] to-white" />
      </div>

      {/* 💎 Profile Card */}
      <div
        className="
          w-full max-w-md
          bg-white/60 backdrop-blur-xl
          border border-black/10
          rounded-3xl
          p-10
          shadow-[0_30px_60px_rgba(0,0,0,0.15)]
          text-center
        "
      >
        {/* Avatar */}
        <div
          className="
            w-24 h-24 mx-auto mb-6
            rounded-full
            bg-black text-white
            flex items-center justify-center
            text-3xl font-serif
            shadow-lg
          "
        >
          {user.name?.charAt(0).toUpperCase()}
        </div>

        {/* User Info */}
        <h2 className="text-3xl font-serif text-gray-900 mb-1">
          {user.name}
        </h2>

        <p className="text-gray-600 text-sm">
          {user.email}
        </p>

        {/* Divider */}
        <div className="w-12 h-[1px] bg-black/20 mx-auto my-6" />

        {/* Message */}
        <p className="text-gray-700 text-sm leading-relaxed">
          Thank you for being part of <span className="font-medium">Vagmi Art Wear</span>.
          Your support means everything to us — each visit helps keep
          handcrafted art alive and celebrated.
        </p>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="
            mt-8 w-full py-3 rounded-full
            bg-black text-white
            tracking-wide
            hover:bg-gray-900
            hover:shadow-[0_0_35px_rgba(0,0,0,0.4)]
            transition duration-300
          "
        >
          Logout →
        </button>
      </div>
    </div>
  );
};

export default Profile;
