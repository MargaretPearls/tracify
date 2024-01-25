/** @type {import('tailwindcss').Config} */
export default {
  prefix: "tw-",
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: {
          150: "#00AFEF",
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
  plugins: [],
};

