import { useState } from "react";
import { ProductListPage } from "@/pages/ProductListPage.js";
import { CartPage } from "@/pages/CartPage.js";
import "./index.css";

type Tab = "products" | "cart";

export default function App() {
  const [tab, setTab] = useState<Tab>("products");

  return (
    <div className="app">
      <nav>
        <button
          className={tab === "products" ? "active" : ""}
          onClick={() => setTab("products")}
        >
          Products
        </button>
        <button
          className={tab === "cart" ? "active" : ""}
          onClick={() => setTab("cart")}
        >
          Cart
        </button>
      </nav>
      <main>
        {tab === "products" && <ProductListPage />}
        {tab === "cart" && <CartPage />}
      </main>
    </div>
  );
}
