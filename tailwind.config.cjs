/** @type {import('tailwindcss').Config} */

module.exports = {
  // plugins: [require('./src/lib/simplifyDefaultsPlugin')],
  // presets: [require('./src/lib/simplifyUtilitiesPreset')],
  content: ['./src/**/*.{ts,tsx,js,jsx}', './stories/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: '"Inter", sans-serif',
      },
    },
  },
}
