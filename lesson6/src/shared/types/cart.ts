import type { Product } from "./product.js";

export type CartItem = {
  product: Product;
  quantity: number;
};
