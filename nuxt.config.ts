// nuxt.config.ts
import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  // For Nuxt 4 (if you've upgraded; optional for Nuxt 3)
  compatibilityDate: "2025-07-15",

  // Specify the source directory
  srcDir: "app/",

  // Add your main CSS file globally
  css: ["~/assets/css/main.css"], // Or wherever your main CSS is

  // Integrate Tailwind via Vite plugin
  vite: {
    plugins: [tailwindcss()],
  },
  // ... other config (e.g., modules, etc.)
});
