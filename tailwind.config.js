module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.{vue,tsx,jsx}",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue",
      "./error.vue"
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/typography')
    ],
  }
