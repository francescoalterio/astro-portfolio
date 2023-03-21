/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#7611a6",
        primaryLight: "#c561f6",
        primaryDark: "#1c0056",
        customGray: {
          100: "#090b11",
          200: "#141925",
          300: "#283044",
          400: "#3d4663",
          500: "#505d84",
          600: "#6474a2",
          700: "#8490b5",
          800: "#a3acc8",
          900: "#c3cadb",
        },
      },
    },
  },
  plugins: [],
};
