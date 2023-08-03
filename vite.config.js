import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  assetsInclude: ["**/*.svg"] // Make sure the pattern includes SVG files
});