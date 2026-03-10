import { useProducts } from "@/hooks/useProducts.js";
import { useCart } from "@/hooks/useCart.js";
import { ProductCard } from "@/components/ProductCard.js";

export function ProductListPage() {
  const { products, loading } = useProducts();
  const { addToCart } = useCart();

  if (loading) return <p>Loading products…</p>;

  return (
    <section>
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={addToCart}
          />
        ))}
      </div>
    </section>
  );
}
