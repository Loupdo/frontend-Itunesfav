import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 10000,
    host: '0.0.0.0',
    proxy: {
      "/api": {
        target: "https://backend-itunesfav.onrender.com/",
        changeOrigin: true
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: './vitest.setup.js'
  },
});