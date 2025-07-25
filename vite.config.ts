import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    open: true,
    port: 5173,
  },
  esbuild: {
    jsx: 'transform',
    jsxFactory: 'undefined', // disables React JSX transform
    jsxFragment: 'undefined',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
}); 