import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', 
  server: {
    allowedHosts: [
      "awning-musket-aware.ngrok-free.dev"
    ]
  }
})
