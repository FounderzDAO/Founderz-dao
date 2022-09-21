/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
  extend: {
  textOpacity: ['dark'],
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
};
