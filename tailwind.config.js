/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#4865EF',
        'login-btn': '#F0F4F8',
      },
    },
  },
  plugins: [],
};
