const plugin = require('tailwindcss/plugin');
const { tokens } = require('./tokens.ts');
const forms = require('@tailwindcss/forms');


module.exports = {
  theme: {
    extend: {
      colors: {
        brand: tokens.colors.brand,
        'brand-dark': tokens.colors.brandDark,
        text: tokens.colors.text,
        muted: tokens.colors.muted,
        success: tokens.colors.success,
        danger: tokens.colors.danger,
      },
      borderRadius: {
        md: tokens.radius.md,
      },
    },
  },
  plugins: [
    forms({ strategy: 'class' }),
    require('@tailwindcss/typography'),
    plugin(function({ addComponents }) {
      addComponents({
        '.btn': {
          '@apply inline-flex items-center justify-center px-3 py-1.5 rounded-md font-medium transition': {},
        },
        '.btn-primary': {
          '@apply btn text-white border border-blue-300 hover:bg-brand-dark': {},
        },
        '.btn-secondary': {
          '@apply btn text-blue-300 bg-gray-200 hover:bg-gray-300': {},
        },
        '.badge': {
          '@apply inline-flex items-center px-2 py-0.5 text-xs rounded-md bg-gray-100 text-gray-700': {},
        }
      });
    })
  ]
};
