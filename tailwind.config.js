/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "erica-one-regular": ['Erica One','sans-serif'],
        "jetbrains-mono": ['JetBrains Mono','serif']
      },
      colors:{
        'gradient-start': '#48AA80',
        'gradient-end': '#004427',
        'dark-start': '#004427',
        'dark-end': '#002214',
      }
    },
  },
  plugins: [],
}