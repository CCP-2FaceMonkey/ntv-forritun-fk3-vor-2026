import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@products',
        replacement: path.resolve(__dirname, 'src/feature/products'),
      },
      {
        find: '@cart',
        replacement: path.resolve(__dirname, 'src/feature/cart'),
      },
      {
        find: '@shared',
        replacement: path.resolve(__dirname, 'src/shared'),
      },
    ],
  },
});
