/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center:true,
      padding: '16px'
    },
    extend: {
      colors:{
        primary:'#f59e0b',
        dark:'#0f172a',
        secondary:'#6b7280'
      },
      screens: {
        '2xl':'1320px'
      }
    },
  },
  plugins: [],
}