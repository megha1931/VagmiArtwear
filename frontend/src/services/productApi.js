const API_URL = "http://localhost:5000/api/products";

// ✅ CREATE PRODUCT (ADMIN ONLY)
export async function createProduct(productData, token) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // 🔥 REQUIRED
    },
    body: JSON.stringify(productData),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to create product");
  }

  return res.json();
}

// ✅ GET ALL PRODUCTS (PUBLIC)
export async function getProducts() {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
export async function deleteProduct(productId, token) {
  const res = await fetch(`${API_URL}/${productId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to delete product");
  }

  return res.json();
}