import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from './config/alias'
import server from './config/server'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias,
  },
  server,
})
