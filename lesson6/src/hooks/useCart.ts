import { useState, useEffect } from "react";
import { getCart, saveCart } from "@/services/cartService.js";
import type { CartItem } from "@/types/cart.js";
import type { Product } from "@/types/product.js";

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(getCart());
  }, []);

  useEffect(() => {
    saveCart(items);
  }, [items]);

  function addToCart(product: Product, quantity = 1) {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { product, quantity }];
    });
  }

  function removeFromCart(productId: string) {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  }

  return { items, addToCart, removeFromCart };
}
