/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "serif"],
      },
      colors: {
        primaryBlue: "#6175CB",
        primaryWhite: "#D8F0F0",
      },
    },
  },
  plugins: [],
};
