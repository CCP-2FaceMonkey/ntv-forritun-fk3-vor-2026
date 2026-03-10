import { useCart } from "@/hooks/useCart.js";
import { CartSummary } from "@/components/CartSummary.js";

export function CartPage() {
  const { items, removeFromCart } = useCart();

  return (
    <section>
      <h2>Your cart</h2>
      <CartSummary items={items} onRemove={removeFromCart} />
    </section>
  );
}
