/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  variants: {
  extend: {
  textOpacity: ['dark'],
  fontFamily: {
    'sarabun': ['Sarabun', 'sans-serif'],
  },
  },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
});