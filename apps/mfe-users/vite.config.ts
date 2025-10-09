import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  server: { 
    port: 5002, 
    cors: true,
    strictPort: true,
    fs: { allow: [".."] } // permite ver cambios en RAIZ/packages/
   },
  plugins: [
    react(),
    federation({
      name: "mfe_users",
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
    cssCodeSplit: true,  // mejor true para separar CSS (en build)
    modulePreload: false,
    minify: false
  }
});
