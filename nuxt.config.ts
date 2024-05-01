// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "Work Sans": [400, 700, 800],
      "Playfair Display": [400, 700],
    },
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
      appear: true,
    },
  },
});
