import { useCart } from '@cart/hooks/useCart';
import { CartSummary } from '@cart/components/CartSummary';

export function CartPage() {
  const { items, removeFromCart } = useCart();

  return (
    <section>
      <h2>Your cart</h2>
      <CartSummary items={items} onRemove={removeFromCart} />
    </section>
  );
}
