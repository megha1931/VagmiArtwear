import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminLogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleAdminLogout = async () => {
    await fetch("http://localhost:5000/api/auth/admin/logout", {
      method: "POST",
      credentials: "include",
    });

    logout(); // clears frontend user state
    navigate("/admin/login");
  };

  return (
    <button
      onClick={handleAdminLogout}
      className="text-red-600 hover:text-red-800 bg-black px-4 py-2 rounded mt-4"
    >
      Admin Logout
    </button>
  );
};

export default AdminLogoutButton;
