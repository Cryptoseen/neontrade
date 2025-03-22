import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  base: './',           // Göreceli yollar
  build: {
    outDir: 'dist',    // Çıktı dist klasörüne
    emptyOutDir: true,
    // Eğer chart.js/auto modülüyle ilgili sorun yaşamazsanız external tanımlamasına gerek yok.
    // external: ['chart.js/auto']
  }
});
