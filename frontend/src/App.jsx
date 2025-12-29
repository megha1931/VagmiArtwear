import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import AdminLogin from "./pages/AdminLogin";
import AdminProducts from "./pages/AdminProducts";
import Productcard from "./pages/ProductCard";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Login from "./pages/UserLogin";
import Register from "./pages/Register";
import Admin from "./pages/Admin";

function App() {
  return (
    <Routes>
      {/* 🔴 DEFAULT REDIRECT */}
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* 🔐 AUTH PAGES */}
      <Route path="/user-login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* 🌍 PUBLIC ROUTES */}
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        {/* ✅ Products list is PUBLIC */}
        <Route path="/products" element={<Products />} />

        {/* 🔐 Product detail is PROTECTED */}
        <Route
          path="/products/:id"
          element={
            <ProtectedRoute redirectTo="/user-login">
              <Productcard />
            </ProtectedRoute>
          }
        />

        {/* 🔐 User profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute redirectTo="/user-login">
              <Profile />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* 🔐 ADMIN ROUTES */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute requiredRole="admin" redirectTo="/admin/login">
            <Admin />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/products"
        element={
          <ProtectedRoute requiredRole="admin" redirectTo="/admin/login">
            <AdminProducts />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
