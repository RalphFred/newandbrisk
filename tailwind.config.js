/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'handlee': ['Handlee', 'cursive'],
        'labrada': ['Labrada', 'serif'],
      },
    },
  },
  plugins: [],
}