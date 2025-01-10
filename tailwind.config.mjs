/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: { fontFamily: { pacifico: "Pacifico, cursive" } },
    colors: {
      primaryColor: {
        black: "#1E1E1E",
        white: "#FFFFFF",
      },
      secondaryColor: {
        green: "#DDF5C4",
        blue: "#C4DDF5",
        aqua: "#C4F5EC",
        magenta: "#F5C4D6",
        orange: "#F5DEC4",
      },
      acent: {
        v1: "#BFBBBB",
        v3: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
