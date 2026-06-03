import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: ["jspdf", "jspdf-autotable"],
  },
  server: {
    port: 8173,
    proxy: {
      "/api": "http://localhost:8000",
    },
  },
});
