import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { vitePlugin as remix } from '@remix-run/dev'

export default defineConfig({
  plugins: [remix(), react(), tsconfigPaths()],
  publicDir: 'public',
  server: {
    port: parseInt(process.env.PORT || '3000'),
  },
  css: {
    postcss: true,
  },
})