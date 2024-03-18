/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      }
    },
      screens: {
      'md': '1460px',
      'sm': '865px',
      'xs': '705px',
      'xxs': '486px',
    },
      backgroundImage: {
        'sky': "url('./assets/sky-bg.png')"
      }
  },
  plugins: [],
}

