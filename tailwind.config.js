/** @type {import('tailwindcss').Config} */
export default {
  prefix: "tw-",
  content: [
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};

