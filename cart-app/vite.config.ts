import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'cartApp',
      filename: 'cartApp.js',
      exposes: {
        './CartApp': './src/index.tsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      input: './src/index.tsx',
      output: {
        format: 'esm',
        entryFileNames: 'cartApp.js',
        minifyInternalExports: true
      }
    }
  },
  server: {
    port: 3001
  }
})
