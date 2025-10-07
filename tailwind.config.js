/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './app/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './pages/**/*.{js,ts,jsx,tsx}',
  ],
   safelist: [
    {
      pattern: /(bg|text|border)-(soboTintColor[1-9])/,
    },
  ],
  theme: {
    extend: {
      colors: {
        soboBlue: '#2D60FF',
        soboLightBlue: '#F3F9FF',
        soboSkyBlue: '#EEF2FF',
        soboBlue50:"#DCE4FE",
        soboBlue100: '#2D60FF26',
        soboBlue200: '#034EB5',
        soboSkyBlue100: '#EEF2FF3b',
        soboPink100: '#ff21dc30',
        soboGreen: '#0DB81E',
        soboRed: '#FF4D4F',
        soboGreen50: '#f6fff6',
        soboGrayLight: '#F1F2F4',
        soboGrayDark: '#262626',
        soboDarkOrange:'#AC6700',
      },
      backgroundImage: {
        'gradient-sobo': 'linear-gradient(to right, #2D60FF, #EEF2FF, #FF21DC)',
        'gradient-blue-sobo': 'linear-gradient(to right, #2D60FF, #EEF2FF, #2D60FF)',
        'gradient-pink-sobo': 'linear-gradient(to right, #FF21DC, #EEF2FF, #FF21DC)',
      },
    },
  },
  plugins: [],
}
