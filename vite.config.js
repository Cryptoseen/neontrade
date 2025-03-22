import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  root: 'public',       // Build için kök dizin olarak public klasörünü belirtiyoruz
  base: './',           // Tüm yolların göreceli olmasını sağlıyoruz
  build: {
    outDir: '../dist',  // Build çıktısını proje kök dizinine yakın dist klasörüne koyuyoruz
    emptyOutDir: true,  // Her build öncesi dist klasörünü temizler
  }
});
