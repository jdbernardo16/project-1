import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],
    vite: {
        plugins: [tailwindcss()],
    },
    modules: [
      "@nuxt/image",
      "@nuxt/fonts",
      "@nuxt/icon",
      "@nuxt/scripts",
      "@nuxt/content",
      "@nuxt/eslint",
      "nuxt-swiper",
    ],
    fonts: {
        families: [
            {
                name: "Familjen Grotesk",
                provider: "google",
                weights: ["400", "500", "600", "700"],
            },
            {
                name: "Pragati Narrow",
                provider: "google",
                weights: ["400", "700"],
            }, // Only 400, 700 available on Google Fonts
            {
                name: "Plus Jakarta Sans",
                provider: "google",
                weights: ["400", "500", "600", "700"],
            },
            {
                name: "Source Serif 4",
                provider: "google",
                weights: ["400", "500", "600", "700"],
            },
            {
                name: "Akshar",
                provider: "google",
                weights: ["400", "500", "600", "700"],
            },
            {
                name: "DM Sans",
                provider: "google",
                weights: ["400", "500", "600", "700"],
            },
        ],
    },
});