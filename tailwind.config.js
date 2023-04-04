module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#112A51',
        'blue-light': '#8BF7D1',
        gray: '#909090',
        violet: '#A66ED8',
      },
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
