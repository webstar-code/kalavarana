module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '480px',
      'md': '769px',
      'xl': '1025px'
      // => @media (max-width: 767px) { ... }

    },
    extend: {
      colors: {
        primary: '#08263F',
        secondary: '#E5AC74',
      }
    },
    fontFamily: {
      'newYork': ['NewYork']
    }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
