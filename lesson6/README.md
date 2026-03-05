# Type-based → Feature-based architecture

A small React + TypeScript + Vite app organized by **type** (layer). Your task is to refactor it into a **feature-based** layout.

## Type-based structure (current)

```
src/
├── types/           ← all types together
│   ├── product.ts
│   └── cart.ts
├── services/        ← all API/data logic together
│   ├── productService.ts
│   └── cartService.ts
├── hooks/           ← all hooks together
│   ├── useProducts.ts
│   └── useCart.ts
├── utils/           ← shared helpers
│   └── formatPrice.ts
├── components/      ← all components together
│   ├── Button.tsx
│   ├── ProductCard.tsx
│   └── CartSummary.tsx
├── pages/
│   ├── ProductListPage.tsx
│   └── CartPage.tsx
├── App.tsx
└── main.tsx
```

## Feature-based structure (target)

Refactor so that each **feature** owns its types, services, hooks, and UI:

```
src/
├── features/
│   ├── products/
│   │   ├── types.ts
│   │   ├── productService.ts
│   │   ├── useProducts.ts
│   │   ├── ProductCard.tsx
│   │   └── ProductListPage.tsx
│   └── cart/
│       ├── types.ts
│       ├── cartService.ts
│       ├── useCart.ts
│       ├── CartSummary.tsx
│       └── CartPage.tsx
├── shared/
│   ├── utils/
│   │   └── formatPrice.ts
│   └── components/
│       └── Button.tsx
├── App.tsx
└── main.tsx
```

## Run the app

```bash
npm install
npm run dev
```

- **Products** tab: list and “Add to cart”.
- **Cart** tab: list items and total (persisted in `localStorage`).
- **Refactor (Todo)** tab: a single-file “monolith” page — break it into smaller components.

## Component refactor: Todo (Monolith) page

The **Refactor (Todo)** tab is a full todo list implemented in one component (`MonolithPage.tsx`). All state, handlers, form, filter buttons, and list rendering live in that file.

**Exercise:** Split it into smaller pieces, for example:

- **TodoItem** — one row (checkbox, label, delete button)
- **TodoForm** — input + Add button
- **TodoFilter** — filter tabs (All / Active / Done)
- **useTodos** (optional) — state and `add` / `toggle` / `delete` logic

Keep the same behaviour; only the structure should change.

## Refactor steps (for students)

1. Create `src/features/products/` and `src/features/cart/`.
2. Move product-related files into `features/products/` and cart-related into `features/cart/`. Adjust imports (including `@/` paths if you keep them).
3. Create `src/shared/utils/` and `src/shared/components/`; move `formatPrice` and `Button` there.
4. Update `App.tsx` and any other files that import from the old paths.
5. Optionally add `index.ts` in each feature folder to export the public API (e.g. `ProductListPage`, `CartPage`).

After refactoring, the app should behave the same; only the folder structure changes.
