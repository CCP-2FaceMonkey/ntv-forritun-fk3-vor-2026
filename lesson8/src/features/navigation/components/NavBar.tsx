import { NavLink } from 'react-router-dom';
import { ShoppingBag, ShoppingCart } from 'lucide-react';
import { useCart } from '@/features/cart/context/useCart';
import { cn } from '@/shared/lib/utils';

export function NavBar() {
  const { items } = useCart();
  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <nav className="border-border bg-card sticky top-0 z-10 border-b">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-4">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            cn(
              'flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary',
              isActive ? 'text-foreground' : 'text-muted-foreground',
            )
          }
        >
          <ShoppingBag className="size-4" aria-hidden />
          Products
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            cn(
              'flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary',
              isActive ? 'text-foreground' : 'text-muted-foreground',
            )
          }
        >
          <ShoppingCart className="size-4" aria-hidden />
          Cart
          {cartCount > 0 && (
            <span className="bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs font-medium">
              {cartCount}
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
}
