/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

    // Nếu bạn có thêm các thư mục khác chứa component:
    "./containers/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eded06",
          100: "#dce5fd",
          200: "#c1d1fc",
          300: "#96b5fa",
          400: "#000000",
          500: "#4066f1",
          600: "#2a47e6",
          700: "#2233d3",
          800: "#222cab",
          900: "#212b87",
          950: "#191d52",
        },
      },
    },
  },
  plugins: [],
};
