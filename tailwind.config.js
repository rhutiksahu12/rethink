/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainText' : '#7E1CFE',
        'textUnderline' : '#744de8',
        'footer' : '#D0D0D0',
      }
    },
  },
  plugins: [],
}
