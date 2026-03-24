<<<<<<<< HEAD:lesson6/src/features/Cart/hooks/useProducts.ts
import { useState, useEffect } from "react";
import { fetchProducts } from "@/features/Cart/services/productService.js";
import type { Product } from "@/features/Cart/types/product.js";
========
import { useState, useEffect } from 'react';
import { fetchProducts } from '@products/services/productService';
import type { Product } from '@products/types/product';
>>>>>>>> upstream/main:lesson6/src/feature/products/hooks/useProducts.ts

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return { products, loading };
}
