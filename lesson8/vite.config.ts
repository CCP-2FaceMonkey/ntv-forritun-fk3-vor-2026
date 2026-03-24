<<<<<<< HEAD
import path from "path";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
=======
import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitest/config';
>>>>>>> 9f5e88ec880bff40904f19a75ce357b87183615e

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@ui": path.resolve(__dirname, "./src/components/ui"),
    },
  },
  test: {
<<<<<<< HEAD
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
=======
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts']
  }
>>>>>>> 9f5e88ec880bff40904f19a75ce357b87183615e
});
