import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath} from 'url'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3002,
    host: 'localhost',
    cors: true
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/main.js',
      name: 'CheckoutApp',
      fileName: 'checkoutApp',
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        paths: {
          vue: 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
        }
      }
    },
    copyPublicDir: true
  },
  publicDir: 'public'
})
