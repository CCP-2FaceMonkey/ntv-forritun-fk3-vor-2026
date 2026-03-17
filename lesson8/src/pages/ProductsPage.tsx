import { Products } from '@/features/products';
// import { useCart } from '@/features/cart/context/CartContext';
import { useAppStore } from '@/shared/store/appStore';

export function ProductsPage() {
  // const { addToCart } = useCart();
  const { addToCart } = useAppStore();
  return <Products onAddToCart={addToCart} />;
}
