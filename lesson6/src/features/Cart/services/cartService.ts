<<<<<<<< HEAD:lesson6/src/features/Cart/services/cartService.ts
import type { CartItem } from "@/features/Cart/types/cart.js";
========
import type { CartItem } from '@cart/types/cart';
>>>>>>>> upstream/main:lesson6/src/feature/cart/services/cartService.ts

const storageKey = 'cart';

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
