import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // This should be '/' for Netlify
  build: {
    outDir: 'dist', // This is the default
  }
})
