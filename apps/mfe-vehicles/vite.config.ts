import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  server: { port: 5003, cors: true, strictPort: true },
  plugins: [
    react(),
    federation({
      name: "mfe_vehicles",
      filename: "remoteEntry.js",
      exposes: {
        "./app/index": "./src/app/index.tsx"
      },
      shared: {
        react: { requiredVersion: false },
        "react-dom": { requiredVersion: false },
        "react-router-dom": { requiredVersion: false },
      }
    })
  ],
  build: {
    target: "esnext",
    cssCodeSplit: false,
    modulePreload: false,
    minify: false
  }
});
