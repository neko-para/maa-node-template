import { defineConfig } from 'vite'

// https://vitejs.dev/config
export default defineConfig({
  root: __dirname,
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'preload',
      formats: ['cjs'],
      fileName: () => '[name].js'
    },
    outDir: '../../dist/preload',
    emptyOutDir: true,
    rollupOptions: {
      external: ['electron']
    },
    sourcemap: true
  }
})
