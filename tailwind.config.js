/** @type {import('tailwindcss').Config} */
export default {
  prefix: "",
  content: [
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontSize:{
        xs: ['12px'],
      },
      colors: {
        // blue: {
        //   250: '#00AFEF'
        // },
        blue: {
          350: "#007099",
        },
        teal: {
          150: '#00afef'
        },
        sky:{
          100: 'DCEFFC'
        },
        cyan: {
          150: "#1D8399",
        },
        cyan: {
          250: "#547F88",
        },
        grey: {
          150: "#E6E6E6",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },      
      animation: {
        fade: 'fadeIn .5s ease-in forwards',
        slideIn: 'slideIn 2s ease-in backwards',
        slideOut: 'slideOut 2s ease-out forwards',
        slideOut2: 'slideOut 3s ease-out forwards',
        slideOut3: 'slideOut 4s ease-out forwards',
        infiniteScroll: 'infiniteScroll 25s linear infinite',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },
        slideIn: {
          from: { transform: 'translateX(100%)', opacity: 0 },
          to: { transform: 'translateX(0%)', opacity: 100 },
        },
        slideOut: {
          from: { transform: 'translateX(100%)', opacity: 0},
          to: { transform: 'translateX(0)', opacity: 100 },
        },
        infiniteScroll:{
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }),
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};

