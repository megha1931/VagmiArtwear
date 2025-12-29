import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, requiredRole }) => {
  const { token, user } = useAuth();

  // Not logged in
  if (!token) {
    // Admin → admin login
    if (requiredRole === "admin") {
      return <Navigate to="/admin/login" replace />;
    }

    // User → user login
    return <Navigate to="/user-login" replace />;
  }

  // Logged in but wrong role
  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default ProtectedRoute;


