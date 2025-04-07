import { defineConfig } from "vite";
import { resolve } from "path";

const repoName = "softline-career"; 

export default defineConfig({
  root: "src",
  base: process.env.NODE_ENV === "production" ? `/${repoName}/` : "./",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ``,
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
