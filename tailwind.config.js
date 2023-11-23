/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#7ba11f',
      },
      backgroundColor: {
        'green': '#7ba11f',
      },
      fontFamily: {
        'handlee': ['Handlee', 'cursive'],
        'labrada': ['Labrada', 'serif'],
      },
    },
  },
  plugins: [],
}