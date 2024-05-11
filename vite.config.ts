import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@commons': path.resolve(__dirname, 'src/commons')
    }
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'grow-components.js',
        assetFileNames: 'grow-components.css'
      }
    },
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es']
    },
  }
})