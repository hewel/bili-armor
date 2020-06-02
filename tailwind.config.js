module.exports = {
  purge: ['./src/**/*.js', './src/**/*.svelte'],
  theme: {
    extend: {
      inset: {
        '1/2': '50%',
      },
      zIndex: {
        '150': 150,
      },
    },
  },
  variants: {},
  plugins: [],
  prefix: '_ba-',
}
