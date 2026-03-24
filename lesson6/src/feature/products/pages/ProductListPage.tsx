<<<<<<< HEAD:lesson6/src/pages/ProductListPage.tsx
import { useProducts } from "@/features/Cart/hooks/useProducts.js";
import { useCart } from "@/features/Cart/hooks/useCart.js";
import { ProductCard } from "@/features/Cart/components/ProductCard.js";
=======
import { useProducts } from '@products/hooks/useProducts';
import { useCart } from '@cart/hooks/useCart';
import { ProductCard } from '@products/components/ProductCard';
>>>>>>> upstream/main:lesson6/src/feature/products/pages/ProductListPage.tsx

export function ProductListPage() {
  const { products, loading } = useProducts();
  const { addToCart } = useCart();

  if (loading) return <p>Loading products…</p>;

  return (
    <section>
      <h2>Products</h2>
      <div className="product-grid">
<<<<<<< HEAD:lesson6/src/pages/ProductListPage.tsx
        {products.map((product: any) => (
=======
        {products.map((product) => (
>>>>>>> upstream/main:lesson6/src/feature/products/pages/ProductListPage.tsx
          <ProductCard key={product.id} product={product} onAdd={addToCart} />
        ))}
      </div>
    </section>
  );
}
