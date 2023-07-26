/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx}', './stories/**/*.{ts,tsx,js,jsx}'],
  plugins: [require('tailwindcss-simplify-plugin'), ],
  theme: {
    extend: {
      fontFamily: {
        serif: '"Inter", sans-serif',
      },
    },
  },
}
