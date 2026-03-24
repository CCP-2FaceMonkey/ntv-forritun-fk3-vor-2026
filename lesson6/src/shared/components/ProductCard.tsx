<<<<<<<< HEAD:lesson6/src/shared/components/ProductCard.tsx
import type { Product } from "@/features/Cart/types/product.js";
import { formatPrice } from "@/utils/formatPrice.js";
import { Button } from "./Button.js";
========
import type { Product } from '@products/types/product';
import { formatPrice } from '@shared/utils/formatPrice';
import { Button } from '@shared/components/Button';
>>>>>>>> upstream/main:lesson6/src/feature/products/components/ProductCard.tsx

type ProductCardProps = {
  product: Product;
  onAdd: (product: Product) => void;
};

export function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>{formatPrice(product.price)}</p>
      <Button onClick={() => onAdd(product)}>Add to cart</Button>
    </div>
  );
}
