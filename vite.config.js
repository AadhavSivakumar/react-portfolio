import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // IMPORTANT: Change this to your repository name
  base: '/react-portfolio/', 
  plugins: [react()],
})