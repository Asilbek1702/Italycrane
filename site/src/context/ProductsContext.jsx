import { createContext, useContext, useEffect, useState } from "react";
import { API_BASE_URL } from "../config";
import { authHeaders } from "../adminAuth";

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
      if (!res.ok) throw new Error("Не удалось получить список товаров");
      const data = await res.json();
      setProducts(data || []);
    } catch (err) {
      console.error("Ошибка при получении товаров:", err.message);
      setError(err.message);
    }
    setLoading(false);
  }

  useEffect(() => {
    refresh();
  }, []);

  async function addProduct(p) {
    const res = await fetch(`${API_BASE_URL}/products/`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authHeaders() },
      body: JSON.stringify(p),
    });
    if (!res.ok) {
      const err = new Error("Не удалось добавить товар");
      console.error(err.message);
      throw err;
    }
    await refresh();
  }

  async function updateProduct(id, p) {
    const res = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", ...authHeaders() },
      body: JSON.stringify(p),
    });
    if (!res.ok) {
      const err = new Error("Не удалось обновить товар");
      console.error(err.message);
      throw err;
    }
    await refresh();
  }

  async function deleteProduct(id) {
    const res = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: "DELETE",
      headers: { ...authHeaders() },
    });
    if (!res.ok) {
      const err = new Error("Не удалось удалить товар");
      console.error(err.message);
      throw err;
    }
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
