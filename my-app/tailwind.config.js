/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
  plugins: [],
};
