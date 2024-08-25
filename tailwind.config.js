/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  colors: {
    yellowGold: "rgb(223, 202, 54 )",
  },
  theme: {
    screens: {
      phone: "400px",
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
      pc: "1024px",
      movil: "0px",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
};
