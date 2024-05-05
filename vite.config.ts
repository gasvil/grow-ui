import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@components': '../../components',
      '@commons': '../../commons',
      '@scripts': '../../commons/scripts'
    }
  }
})