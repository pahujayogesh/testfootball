/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gr:{
          700: '#27272a',
          800:'#2f2e2e',
          900:'#1d1d1d'
        },
        yl:{
          200:'#807a0e'
        }
      }
    },
  },

  plugins: [],
}

