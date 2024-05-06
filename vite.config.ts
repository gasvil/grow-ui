import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@commons': path.resolve(__dirname, 'src/commons')
    }
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es']
    }
  }
})