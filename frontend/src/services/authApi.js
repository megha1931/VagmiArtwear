// frontend/src/services/authApi.js

const API_URL = import.meta.env.VITE_API_URL;
console.log("API_URL:", API_URL);

// ADMIN LOGIN (ONLY LOGIN, NO REGISTER)
export const adminLogin = async (data) => {
  const res = await fetch(`${API_URL}/api/auth/admin/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Admin login failed");
  }

  return res.json();
};

// USER LOGIN
export const userLogin = async (data) => {
  const res = await fetch(`${API_URL}/api/auth/user-login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("User login failed");
  }

  return res.json();
};

// USER REGISTER
export const userRegister = async (data) => {
  const res = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Register failed");
  }

  return res.json();
};
// DELETE PRODUCT BY ID (ADMIN ONLY)

export async function deleteProduct(productId, token) {
  const res = await fetch(
    `http://localhost:5000/api/products/${productId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Delete failed");
  }

  return res.json();
}

export const adminLogout = async () => {
  const res = await fetch("http://localhost:5000/api/auth/admin/logout", {
    method: "POST",
    credentials: "include", // 🔥 REQUIRED
  });

  if (!res.ok) {
    throw new Error("Admin logout failed");
  }

  return res.json();
};
