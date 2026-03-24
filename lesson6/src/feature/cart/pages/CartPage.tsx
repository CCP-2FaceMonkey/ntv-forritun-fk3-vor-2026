<<<<<<< HEAD:lesson6/src/pages/CartPage.tsx
import { useCart } from "@/features/Cart/hooks/useCart.js";
import { CartSummary } from "@/features/Cart/components/CartSummary.js";
=======
import { useCart } from '@cart/hooks/useCart';
import { CartSummary } from '@cart/components/CartSummary';
>>>>>>> upstream/main:lesson6/src/feature/cart/pages/CartPage.tsx

export function CartPage() {
  const { items, removeFromCart } = useCart();

  return (
    <section>
      <h2>Your cart</h2>
      <CartSummary items={items} onRemove={removeFromCart} />
    </section>
  );
}
