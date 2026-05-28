import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

// Plain static Vite + React SPA build.
// Output goes to ./dist for upload to traditional shared hosting (e.g. Hostinger).
// `base: "./"` makes asset URLs relative so the build works from any subdirectory.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
  server: {
    host: "::",
    port: 8080,
  },
});
