const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.blue700,
        secondary: 'blue-100',
        white: 'white',
        dark: 'black'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}