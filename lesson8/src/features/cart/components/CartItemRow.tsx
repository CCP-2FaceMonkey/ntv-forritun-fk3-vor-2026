import { Card, CardContent } from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import type { CartItem as CartItemType } from "../types";
import { useAppStore } from "@/shared/store/appStore";

type CartItemRowProps = {
  item: CartItemType;
};

export function CartItemRow({ item }: CartItemRowProps) {
  const changeQuantity = useAppStore((state) => state.changeQuantity);
  const removeItem = useAppStore((state) => state.removeItem);
  const { product, quantity } = item;
  const subtotal = product.price * quantity;

  return (
    <Card>
      <CardContent className="flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1">
          <p className="font-medium">{product.name}</p>
          <p className="text-muted-foreground text-sm">
            {new Intl.NumberFormat("is-IS", {
              style: "currency",
              currency: "ISK",
            }).format(product.price)}{" "}
            each
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Label
              htmlFor={`qty-${product.id}`}
              className="text-muted-foreground text-sm"
            >
              Qty
            </Label>
            <Input
              id={`qty-${product.id}`}
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => {
                const v = parseInt(e.target.value, 10);
                if (!Number.isNaN(v) && v >= 1) changeQuantity(product.id, v);
              }}
              className="h-8 w-16"
            />
          </div>

          <p className="font-medium">
            {new Intl.NumberFormat("is-IS", {
              style: "currency",
              currency: "ISK",
            }).format(subtotal)}
          </p>

          <button
            type="button"
            onClick={() => removeItem(product.id)}
            className="text-muted-foreground hover:text-foreground text-sm underline"
          >
            Remove
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
