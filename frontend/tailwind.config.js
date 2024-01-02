/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      screens: {
        xs: '479px',
        xxl: '2200px',
        xxm: '3000px'
      }
    },
    colors: {
      sred: '#ef5552',
      bgcolorcontext: '#1b1b1b',
      sgray: '#2f2f31',
      sgray2: '#252526',
      sgrayhover: '#252527',
      redalert: '#4B1113',
      graypalid: '#404040'
    }
  },
  plugins: [require('flowbite/plugin')],
  darkMode: 'class'
}

