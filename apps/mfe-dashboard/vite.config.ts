import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  server: { port: 5001, cors: true, strictPort: true },
  plugins: [
    react(),
    federation({
      name: "mfe_dashboard",
      filename: "remoteEntry.js",
      exposes: { "./App": "./src/App.tsx" },
      shared: {
        react: { requiredVersion: false },
        "react-dom": { requiredVersion: false }
      }
    })
  ],
  build: {
    target: "esnext",
    cssCodeSplit: false,
    modulePreload: false,
    minify: false,
    // opcional, hace nombres predecibles para otros assets
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]"
      }
    }
  }
});
