const plugin = require('tailwindcss/plugin');
const { tokens } = require('./tokens.ts');

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: tokens.colors.brand,
        'brand-dark': tokens.colors.brandDark,
      },
      borderRadius: {
        md: tokens.radius.md,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(function({ addComponents, theme }) {
      addComponents({
        '.btn': {
          '@apply inline-flex items-center justify-center px-3 py-1.5 rounded-md font-medium transition': {},
        },
        '.btn-primary': {
          '@apply btn text-white bg-brand hover:bg-brand-dark': {},
        },
        '.btn-secondary': {
          '@apply btn text-gray-700 bg-gray-200 hover:bg-gray-300': {},
        },
        '.badge': {
          '@apply inline-flex items-center px-2 py-0.5 text-xs rounded-md bg-gray-100 text-gray-700': {},
        }
      });
    })
  ]
};
