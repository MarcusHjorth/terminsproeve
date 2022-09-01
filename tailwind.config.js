/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        "12": "12px",
        "14": "14px",
        "16": "16px",
        "18": "18px",
        "20": "20px",
        "24": "24px",
        "36": "36px",
        "56": "56px"
      },

      colors: {
        "Yellow": "#F1C40E",
        "Black": "#000000",
        "White": "#FFFFFF",
        "DarkGray": "#9E9E9E",
        "LightGray": "#D4D4D4",
        "OffWhite": "#FBFBFB"
      },
    },
  },
  plugins: [],
}