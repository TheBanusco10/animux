import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/icon"],
  css: ["~/assets/app.css"],
  extends: [
    "./features/animelist/nuxt.config.ts",
    "./features/auth/nuxt.config.ts",
    "./features/shared/nuxt.config.ts",
  ],
  runtimeConfig: {
    public: {
      apiBaseUrl: "",
    },
  },
});
