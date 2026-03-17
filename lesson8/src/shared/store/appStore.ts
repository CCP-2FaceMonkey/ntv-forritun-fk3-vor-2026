import type { CartItem, Product } from '@/features';
import { create } from 'zustand';

interface AppStore {
    items: CartItem[];
    addToCart: (product: Product) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    removeItem: (productId: string) => void;
}

export const useAppStore = create<AppStore>((set) => ({
    items: [],

    addToCart: (product) =>
    set((state) => {
      const existing = state.items.find(
        (i) => i.product.id === product.id
      );

      if (existing) {
        return {
          items: state.items.map((i) =>
            i.product.id === product.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }

      return {
        items: [...state.items, { product, quantity: 1 }],
      };
    }),

    updateQuantity: (productId, quanitity) =>
        set((state) => ({
            items: state.items.map((i) => i.product.id === productId ? { ...i, quanitity } : i).filter((i) => i.quantity > 0),
        })),

    removeItem: (productId) =>
        set((state) => ({
            items: state.items.filter(
                (i) => i.product.id !== productId
            ),
        })),
}));