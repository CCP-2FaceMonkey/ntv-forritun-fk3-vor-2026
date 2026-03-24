<<<<<<<< HEAD:lesson6/src/shared/components/CartSummary.tsx
import type { CartItem } from "@/features/Cart/types/cart.js";
import { formatPrice } from "@/utils/formatPrice.js";
import { Button } from "./Button.js";
========
import type { CartItem } from '@cart/types/cart';
import { formatPrice } from '@shared/utils/formatPrice';
import { Button } from '@shared/components/Button';
>>>>>>>> upstream/main:lesson6/src/feature/cart/components/CartSummary.tsx

type CartSummaryProps = {
  items: CartItem[];
  onRemove: (productId: string) => void;
};

export function CartSummary({ items, onRemove }: CartSummaryProps) {
  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  if (items.length === 0) {
    return <p className="empty">Cart is empty.</p>;
  }

  return (
    <div className="cart-summary">
      <h3>Cart</h3>
      <ul>
        {items.map(({ product, quantity }) => (
          <li key={product.id}>
<<<<<<<< HEAD:lesson6/src/shared/components/CartSummary.tsx
            {product.name} × {quantity} —{" "}
========
            {product.name} × {quantity} —{' '}
>>>>>>>> upstream/main:lesson6/src/feature/cart/components/CartSummary.tsx
            {formatPrice(product.price * quantity)}
            <Button onClick={() => onRemove(product.id)}>Remove</Button>
          </li>
        ))}
      </ul>
      <p className="total">Total: {formatPrice(total)}</p>
    </div>
  );
}
