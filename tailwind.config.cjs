/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: "#050509",
        surface: "#0B0B11",
        accent: "#6366F1",
      },
      boxShadow: {
        'soft': '0 18px 45px rgba(0,0,0,0.55)',
      }
    },
  },
  plugins: [],
}
