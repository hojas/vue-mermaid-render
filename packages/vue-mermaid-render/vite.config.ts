import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'VueMermaidRender',
      fileName: 'vue-mermaid-render',
    },
    rollupOptions: {
      external: ['vue', 'mermaid'],
      output: {
        globals: {
          vue: 'Vue',
          mermaid: 'mermaid',
        },
      },
    },
  },
  plugins: [vue()],
})
