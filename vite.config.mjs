import { defineConfig } from 'vite';

export default defineConfig({
  base: '/transparencia-conectada/',
  // ...otras configuraciones
});
  root: './',
  server: {
    port: 5173,
    open: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
