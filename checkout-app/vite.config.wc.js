import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath} from 'url'

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
    cors: true,
    open: '/index.html'
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/main.js',
      name: 'CheckoutApp',
      fileName: 'checkoutApp.js',
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        format: 'esm',
        globals: {
          vue: 'Vue'
        },
        paths: {
          vue: 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
        }
      }
    }
  }
})
