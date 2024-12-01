/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
        yellow: {
          500: '#FFCC00', // Custom goldish yellow
        },
      },
    },
  },
  plugins: [],
}