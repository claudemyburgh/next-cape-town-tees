const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,tsx,json}', './components/**/*.{js,ts,tsx,json}'],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.amber
      }
    },
  },
  plugins: [],
}
