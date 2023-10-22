import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // build: {
  //   rollupOptions: {
  //     input: {
  //       index: path.resolve(__dirname, "index.html"),
  //       nested: path.resolve(__dirname, "nested/index.html"),
  //     },
  //   },
  // },
});
