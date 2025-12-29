import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/user-login");
  };

  if (loading) return null;

  return (
    <nav
      className="
        sticky top-0 z-50
        backdrop-blur-xl
        bg-gradient-to-r from-[#fff1df]/80 via-[#f6e3c5]/80 to-[#fff1df]/80
        border-b border-black/10
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* 🌸 LOGO */}
        <Link to="/home" className="group flex items-center gap-3">
          <div
            className="
              p-2 rounded-2xl
              bg-white/60 backdrop-blur
              border border-black/10
              shadow-md
              transition-all duration-500
              group-hover:shadow-[0_0_25px_rgba(255,190,120,0.6)]
              group-hover:scale-105
            "
          >
            <img
              src="https://res.cloudinary.com/dc4siqnjp/image/upload/v1766659690/Vagmi_logo_pbevi9.png"
              alt="Vagmi Logo"
              className="w-14 h-14 object-contain"
            />
          </div>

          <span className="hidden sm:block font-serif text-xl tracking-wide text-gray-800">
            VAGMI
          </span>
        </Link>

        {/* 🔗 LINKS */}
        <div className="flex items-center space-x-10 text-gray-700 font-medium">
          <NavItem to="/home">Home</NavItem>
          <NavItem to="/products">Products</NavItem>
          <NavItem to="/contact">Contact</NavItem>

          {user ? (
            <>
              <NavItem to="/profile">Profile</NavItem>

              <button
              type="submit"
                onClick={handleLogout}
                className="
                  relative text-red-600
                  hover:text-red-700
                  transition
                  after:absolute after:-bottom-1 after:left-0
                  after:h-[2px] after:w-0 after:bg-red-600
                  hover:after:w-full after:transition-all
                "
              >
                Logout
              </button>
            </>
          ) : (
            <NavItem to="/user-login">Login</NavItem>
          )}
        </div>
      </div>
    </nav>
  );
}

/* 🔥 Animated Nav Link Component */
function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        relative transition-all duration-300
        ${isActive ? "text-black" : "hover:text-black"}
        after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:bg-black
        after:transition-all after:duration-300
        ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
        `
      }
    >
      {children}
    </NavLink>
  );
}

export default Navbar;
