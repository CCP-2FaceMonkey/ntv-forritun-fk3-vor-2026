import { Products } from '@/features/products';
import { useCart } from '@/features/cart/context/useCart';

export function ProductsPage() {
  const { addToCart } = useCart();
  return <Products onAddToCart={addToCart} />;
}
