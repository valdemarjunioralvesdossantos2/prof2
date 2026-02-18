import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
  // Defina aqui o nome da nova pasta
    outDir: 'build', 
  },
  server: {  
    host: true
  }
})
