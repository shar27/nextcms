/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require('daisyui')],
  theme: {
    fontFamily:{
      arial: ['arial']
    },
    
    extend: {
      height:{
        xxl: '27rem',
        xxl2: '29rem',
        xxl3: '32rem',
      },
    },
  },
  plugins: [],
}
