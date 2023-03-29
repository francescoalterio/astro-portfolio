/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffaf29",
        primaryLight: "#ffc25c",
        primaryHover: "hsla(281, 81%, 36%, 0.33)",
        purpleBlue: "#5b29ff",
        customGray: {
          100: "#424657",
          200: "#333646",
          300: "#252734",
          400: "#222430",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
