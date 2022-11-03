/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ejs,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      minHeight: {
        12: "3rem",
        16: "4rem",
      },
      minWidth: {
        xs: "320px",
        12: "3rem",
        16: "4rem",
      },
    },
  },
  plugins: [],
};
