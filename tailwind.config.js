module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#08263F',
        secondary: '#E5AC74',
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
