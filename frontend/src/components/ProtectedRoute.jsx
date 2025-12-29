import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({
  children,
  requiredRole,
  redirectTo,
}) => {
  const { token, user, loading } = useAuth();

  // 🔥 WAIT until auth is restored
  if (loading) {
    return null; // or a loader
  }

  // 🔐 Not logged in
  if (!token || !user) {
    // Admin routes
    if (requiredRole === "admin") {
      return <Navigate to="/admin/login" replace />;
    }

    // User routes
    return <Navigate to={redirectTo || "/user-login"} replace />;
  }

  // 🔐 Logged in but wrong role
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default ProtectedRoute;