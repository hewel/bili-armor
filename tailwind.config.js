const { spacing } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.js', './src/**/*.svelte'],
  theme: {
    extend: {
      inset: {
        ...spacing,
        '9': '2.25rem',
        '1/2': '50%',
      },
      zIndex: {
        '150': 150,
      },
      spacing: {
        '9': '2.25rem',
      },
    },
  },
  variants: {},
  plugins: [],
  prefix: '_ba-',
}
