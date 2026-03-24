import type { Product } from '@products/types/product';

export type CartItem = {
  product: Product;
  quantity: number;
};
