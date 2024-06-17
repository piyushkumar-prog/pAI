import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VercelPlugin } from '@vercel/vite-plugin-vercel';

export default defineConfig({
  plugins: [
    react(),
    VercelPlugin({
      // Optional: Set the build directory
      buildDir: 'public',
    }),
  ],
  build: {
    outDir: 'public',
  },
  env: {
    VITE_BASE_PATH: '/',
  },
});