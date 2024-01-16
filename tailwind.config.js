/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'darkTheme':{
        100: '#FAF0E6',
        200: '#B9B4C7',
        300: '#5C5470',
        400: '#352F44',
      }
    },
    screens:{
      'tablet':'640px',
    },
    extend: {},
  },
  plugins: [],
}