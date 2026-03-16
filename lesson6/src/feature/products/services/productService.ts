import type { Product } from '@products/types/product';

const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Apple', price: 150 },
  { id: '2', name: 'Bread', price: 320 },
  { id: '3', name: 'Milk', price: 180 },
];

export async function fetchProducts(): Promise<Product[]> {
  await new Promise((r) => setTimeout(r, 300));
  return MOCK_PRODUCTS;
}
