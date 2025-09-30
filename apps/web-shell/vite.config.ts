import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  server: { port: 5000, strictPort: true },
  optimizeDeps: {
    // evita prebundles separados en dev
  },
  plugins: [
    react(),
    federation({
      name: "web_shell",
      remotes: {
        mfeDashboard: "http://127.0.0.1:5001/assets/remoteEntry.js",
        mfeUsers:     "http://127.0.0.1:5002/assets/remoteEntry.js",
        mfeVehicles:  "http://127.0.0.1:5003/assets/remoteEntry.js",
      },
      shared: {
        react: { requiredVersion: false },
        "react-dom": { requiredVersion: false },
        "react-router-dom": { requiredVersion: false },
        "@tanstack/react-query": { requiredVersion: false },
      }
    })
  ]
});
