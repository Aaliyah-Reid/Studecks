/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'baseColour':  '#C8B6FF',
        'backGroundColour': '#EEE8FF',
        // 'gridColour': '#A491E0',
        'gridColour': '#F88DAD80',
        'borderColour': '#6A75CC',
        'periwinkle-dark': '#B8C0FF',
        'periwinkle-light': '#B8C0FF',
        'fillColour': ' #F8F6FD',
        'buttonFill': '#8168CC',
        'placeholderColour': '#6349B2',
        'hoverFill': '#6349B2',
        'mainText': '#8168CC'

      },
      fontFamily: {
        'baloo': ['Baloo Tammudu 2', 'sans-serif'],
      },
    },
  },
  plugins: [],
}