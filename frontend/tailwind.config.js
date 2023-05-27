/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'umd-red': '#E21833',
        'umd-gray': '#6C6C6C',
        'umd-gray2': 'rgba(255, 255, 255, 0.5)',
        'umd-gold': "#E0B13A",
        'gold': "#e6b04b"
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

