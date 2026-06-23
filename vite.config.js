import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// NOTE: set `base` to "/<your-repo-name>/" for GitHub Pages project sites.
export default defineConfig({
  base: './',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
});
