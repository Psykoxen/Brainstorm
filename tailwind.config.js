/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "secondary-main-color": {
          50: "#FCF3F8",
          100: "#FAE9F4",
          200: "#F7D3E8",
          300: "#F1B0D6",
          400: "#E77FB9",
          500: "#DC589E",
          600: "#C9397F",
          700: "#AD2965",
          800: "#9A275A",
          900: "#782348",
          950: "#490E27",
        },
      },
    },
  },
  plugins: [],
};
