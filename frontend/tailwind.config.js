/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'burgundy': '#2e1718',
        'lighter-burgundy': '#412224'
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#2e1718",
          "secondary": "#412224",
          "important": "#e6b04b",
          "neutral": "#3D4451",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

