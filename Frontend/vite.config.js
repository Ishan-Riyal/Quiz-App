// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   optimizeDeps: {
//     exclude: ["jspdf", "jspdf-autotable"],
//   },
//   server: {
//     port: 8173,
//     proxy: {
//       "/api": "http://localhost:8000",
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: ["jspdf", "jspdf-autotable"],
  },
  define: {
    "process.env.API_URL": JSON.stringify(
      mode === "production"
        ? "https://quiz-app-backend-8n1a.onrender.com"
        : "http://localhost:8000",
    ),
  },
  server: {
    port: 8173,
    proxy: {
      "/api": "http://localhost:8000",
    },
  },
}));
