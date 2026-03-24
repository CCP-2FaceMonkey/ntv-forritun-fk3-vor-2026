import type { CartItem } from "@/features/Cart/types/cart.js";

const storageKey = "cart";

export function getCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(storageKey);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

export function saveCart(items: CartItem[]): void {
  localStorage.setItem(storageKey, JSON.stringify(items));
}
