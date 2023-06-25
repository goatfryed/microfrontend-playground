import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react({

      }),
  ],
  server: {
    port: 19911,
    hmr: false,
    proxy: {
      '/api': {
        target: 'http://localhost:19912',
        changeOrigin: true,
      }
    }
  },
  build: {
      rollupOptions: {
          output: {
              globals: {
                "react": "React",
                "react-dom": "ReactDOM",
              }
          }
      }
  }
});
