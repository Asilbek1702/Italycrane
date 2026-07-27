import { createContext, useContext, useEffect, useState } from "react";
import { API_BASE_URL } from "../config";

const ProductsContext = createContext(null);

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function refresh() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/products/`);
      if (!res.ok) throw new Error("Failed to fetch products");
      setProducts(await res.json());
    } catch (e) {
      console.error("Ошибка при получении товаров:", e.message);
      setError(e.message);
    }
    setLoading(false);
  }

  useEffect(() => { refresh(); }, []);

  function authHeaders() {
    const token = localStorage.getItem("admin_token");
    return { "Content-Type": "application/json", Authorization: `Bearer ${token}` };
  }

  async function addProduct(p) {
    const res = await fetch(`${API_BASE_URL}/products/`, {
      method: "POST", headers: authHeaders(), body: JSON.stringify(p),
    });
    if (!res.ok) throw new Error("create failed");
    await refresh();
  }

  async function updateProduct(id, p) {
    const res = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: "PUT", headers: authHeaders(), body: JSON.stringify(p),
    });
    if (!res.ok) throw new Error("update failed");
    await refresh();
  }

  async function deleteProduct(id) {
    const res = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: "DELETE", headers: authHeaders(),
    });
    if (!res.ok) throw new Error("delete failed");
    await refresh();
  }

  return (
    <ProductsContext.Provider value={{ products, loading, error, addProduct, updateProduct, deleteProduct, refresh }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}