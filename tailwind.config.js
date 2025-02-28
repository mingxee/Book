/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'flip': 'pageTurn var(--page-transition-duration) ease-in-out forwards',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      boxShadow: {
        'book': '0 0 20px rgba(0, 0, 0, 0.3)',
        'page': '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};