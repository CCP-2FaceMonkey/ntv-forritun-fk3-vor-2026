import type { Product } from "@/types/product.js";
import { formatPrice } from "@/utils/formatPrice.js";
import { Button } from "./Button.js";

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
