const preset = require('@platform/styles/tailwind.preset');

module.exports = {
  presets: [preset],
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    '../../packages/ui-web/src/**/*.{ts,tsx,js,jsx,css}',
    // opcional: si reusas componentes TS/TSX desde packages
    //'../../packages/**/*.{ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  }
};
