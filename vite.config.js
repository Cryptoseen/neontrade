import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: './', // ✅ Ana dizini işaret et
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './public/index.html' // ✅ Doğru giriş noktası
    }
  }
})