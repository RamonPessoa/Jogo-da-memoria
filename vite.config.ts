import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@fonts': path.resolve(__dirname, './src/assets/fonts'),
      '@cards': path.resolve(__dirname, './src/assets/cards'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
    },
  },
});
