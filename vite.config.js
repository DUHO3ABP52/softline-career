import { defineConfig } from "vite";
import { resolve } from "path";

// Используем имя репозитория для базового пути GitHub Pages
// Замените 'YOUR_REPO_NAME' на имя вашего репозитория
const repoName = "softline-career"; // или другое имя, которое вы выберете

export default defineConfig({
  root: "src",
  // Для GitHub Pages нужно использовать относительный путь или имя репозитория
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
