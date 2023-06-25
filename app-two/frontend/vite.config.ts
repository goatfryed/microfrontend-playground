import { defineConfig } from "vite";
import react from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react({

      }),
  ],
  server: {
    port: 19921,
    hmr: true,
    proxy: {
      '/api': {
        target: 'http://localhost:19922',
        changeOrigin: true,
      }
    }
  },
  build: {
      rollupOptions: {
          output: {
          }
      }
  }
});
