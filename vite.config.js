import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  root: 'public',       // public klasörünü build kökü yapıyoruz
  base: './',           // Göreceli yollar
  build: {
    outDir: '../dist',  // Çıktı dist klasörüne
    emptyOutDir: true,
  }
});
