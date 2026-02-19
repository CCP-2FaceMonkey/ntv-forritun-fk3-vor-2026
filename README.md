# ntv-forritun-fk3-vor-2026

A Vite + TypeScript boilerplate frontend project.

## Features

- ⚡️ [Vite](https://vite.dev/) - Lightning fast build tool
- 🔷 [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- 📦 Modern ES modules
- 🎨 CSS with modern features
- 🔥 Hot Module Replacement (HMR)

## Getting Started

### Prerequisites

- Node.js (version 20.19.0 or higher, or Node.js 22.12.0+)
- npm (comes with Node.js)

### Installation

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Build for production:

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
.
├── public/          # Static assets
├── src/             # Source files
│   ├── main.ts      # Application entry point
│   ├── counter.ts   # Example TypeScript module
│   ├── style.css    # Global styles
│   └── *.svg        # SVG assets
├── index.html       # HTML entry point
├── package.json     # Project dependencies and scripts
├── tsconfig.json    # TypeScript configuration
└── .gitignore       # Git ignore rules
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Technologies Used

- **Vite** - Next generation frontend tooling
- **TypeScript** - Typed superset of JavaScript
- **ES2022** - Modern JavaScript features