import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  base: '/', // ✅ Kök yolu doğru ayarlamak için
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './public/index.html' // ✅ Doğru giriş noktası
    }
  }
});
