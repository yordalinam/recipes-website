import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
   test: {
    environment: 'jsdom',
     globals: true,
    setupFiles: './src/tests/setup.ts',
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000', //for development only
    },
  },
} as UserConfig)
