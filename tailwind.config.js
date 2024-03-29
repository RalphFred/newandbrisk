/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#7BA11F',
        'cream' : '#FDF7E4',
      },
      backgroundColor: {
        'green': '#7BA11F',
        'cream' : '#fdfaf0',
      },
      fontFamily: {
        'handlee': ['Handlee', 'cursive'],
        'labrada': ['Labrada', 'serif'],
      },
    },
  },
  plugins: [],
}