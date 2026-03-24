import { describe, it, expect, beforeEach } from "vitest";
import { useAppStore } from "@/shared/store/appStore";
import type { Product } from "@/features/products/types";

const product1: Product = {
  id: "1",
  name: "Product 1",
  price: 1000,
};
describe("Cart Store", () => {
  beforeEach(() => {
    useAppStore.setState({ items: [] });
  });

  it ("add a new product > quantity is 1",() => {
    useAppStore.getState().addToCart(product1);

    const items = useAppStore.getState().items;

    expect(items).toHaveLength(1);
    expect(items[0].quantity ).toBe(1);
  });

  it ("add same product twice > quantity is 2")