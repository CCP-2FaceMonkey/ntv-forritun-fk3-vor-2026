import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Separator } from "@/shared/components/ui/separator";
import { useAppStore } from "@/shared/store/appStore";

export function CartSummary() {
  const items = useAppStore((state) => state.items);
  const total = items.reduce(
    (sum, { product, quantity }) => sum + product.price * quantity,
    0,
  );
  const count = items.reduce((sum, { quantity }) => sum + quantity, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 pt-0">
        <p className="text-muted-foreground text-sm">
          {count} {count === 1 ? "item" : "items"}
        </p>
        <Separator />
        <p className="font-semibold">
          Total:{" "}
          {new Intl.NumberFormat("is-IS", {
            style: "currency",
            currency: "ISK",
          }).format(total)}
        </p>
      </CardContent>
    </Card>
  );
}
