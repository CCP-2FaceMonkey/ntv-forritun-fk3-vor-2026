# ntv-forritun-fk3-vor-2026

Frontend project template built with:

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui-style component structure

This repository is intended to be used as a base project.

---

# 🚀 Getting Started

## 1️⃣ Fork this repository (Important)

Do **not** clone this repository directly.

Instead:

1. Click the **Fork** button (top right on GitHub).
2. Create your own copy under your GitHub account.
3. Clone *your forked repository* to your machine.

Example:

```bash
git clone https://github.com/YOUR-USERNAME/ntv-forritun-fk3-vor-2026.git
cd ntv-forritun-fk3-vor-2026
```

This ensures:
- Everyone works in their own repository
- The original template remains unchanged
- You can submit your own repo link when required

---

## 2️⃣ Install dependencies

Make sure you have a recent Node.js LTS version installed.

Then run:

```bash
npm install
```

---

## 3️⃣ Run development server

```bash
npm run dev
```

This starts the Vite development server.

Open the local URL shown in the terminal.

---

## 4️⃣ Build for production

```bash
npm run build
```

---

## 5️⃣ Preview production build

```bash
npm run preview
```

---

# 📁 Project Structure

```
.
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── Input.tsx
│   │   └── ShopCard.tsx
│   ├── lib/
│   │   └── utils.ts         # Utility helpers (e.g. class merging)
│   ├── App.tsx              # Main app component
│   ├── App.css
│   ├── index.css            # Tailwind entry + theme variables
│   └── main.tsx             # React entry point
├── components.json          # shadcn/ui configuration
├── vite.config.ts           # Vite config (+ @ alias to src)
├── tsconfig.json
├── eslint.config.js
└── package.json
```

---

# 🧩 Architecture Overview

- `main.tsx` mounts the React app.
- `App.tsx` is the root component.
- Components live inside `src/components`.
- Shared utilities live inside `src/lib`.
- `@/` is configured as an alias for `src/`.

Example import:

```ts
import { ShopCard } from "@/components/ShopCard"
```

---

# 🎨 Styling

- Tailwind CSS is configured via `index.css`
- UI components follow the shadcn/ui structure
- `utils.ts` includes a `cn()` helper for merging class names safely

---

# 🧪 Linting

Run ESLint with:

```bash
npm run lint
```

---

# 🛠 Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- ESLint

---

# 📌 Notes

- Always work in your **forked repository**
- Commit regularly
- Push your changes to your GitHub fork
- Do not push directly to the original template repository

---

# 📄 License

NTV owned code