/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#262626",
        secondary: "#3A3A3A",
        tertiary: "#4D4D4D",
        "main-gray": "#E6E6E6",
        "secondary-gray": "#D2D2D2",
        "dark-gray": "#949494",
      },
    },
  },
  plugins: [],
};
