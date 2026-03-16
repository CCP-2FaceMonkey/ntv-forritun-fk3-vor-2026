import type { Product } from '@products/types/product';
import { formatPrice } from '@shared/utils/formatPrice';
import { Button } from '@shared/components/Button';

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
