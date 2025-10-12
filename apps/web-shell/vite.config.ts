import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import svgr from "vite-plugin-svgr";


export default defineConfig({
  server: { 
    port: 5000,
    strictPort: true,
    fs: { allow: [".."] } //para hot-reload si usas /packages/*
  },
  optimizeDeps: {
    // evita prebundles separados en dev
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        svgo: true,
      },
    }),
    federation({
      name: "web_shell",
      remotes: {
        mfeDashboard: "http://localhost:5001/assets/remoteEntry.js",
        mfeUsers:     "http://localhost:5002/assets/remoteEntry.js",
        mfeVehicles:  "http://localhost:5003/assets/remoteEntry.js",
      },
      shared: {
        react: { requiredVersion: false },
        "react-dom": { requiredVersion: false },
        "react-router-dom": { requiredVersion: false },
        "@tanstack/react-query": { requiredVersion: false },
      }
    })
  ],build: {
    target: "esnext",
    cssCodeSplit: true,  // mejor true para separar CSS (en build)
    modulePreload: false,
    minify: false
  }
});
