/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bmOrange: "#FF9722",
        bmPink: {
          200: "#FEB4D6",
          300: "#FE94C4",
          400: "#FF6AAF",
          500: "#FF2291",
        },
        bmBlue: {
          200: "#B8C1FF",
          300: "#939FFF",
          400: "#697BFF",
          500: "#3E56FF",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
