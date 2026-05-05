// nuxt.config.ts
import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  // For Nuxt 4 (if you've upgraded; optional for Nuxt 3)
  compatibilityDate: "2025-07-15",

  // Specify the source directory
  srcDir: "app/",

  // Modules
  modules: ["@nuxt/content"],

  // Nuxt Content: use sqlite adapter. When running under Bun, Content will
  // automatically use Bun's built-in sqlite driver (bun:sqlite).
  content: {
    // Use sqlite; Content will auto-select bun:sqlite at runtime when running under Bun.
    database: {
      type: "sqlite",
      filename: ".data/content/contents.sqlite",
    },
    experimental: {
      // Build/prerender under Node use the native Node sqlite connector (no native deps or postinstall)
      sqliteConnector: "native",
    },
  },

  // Add your main CSS file globally
  css: ["~/assets/css/main.css"], // Or wherever your main CSS is

  // Integrate Tailwind via Vite plugin
  vite: {
    plugins: [tailwindcss()],
  },

  // Ensure server build targets Bun when deploying/running under Bun
  nitro: {
    preset: "bun",
  },
});
