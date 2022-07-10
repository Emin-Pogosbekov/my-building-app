/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        appDarkest: "#050505",
        appDark: "#0f0f0f",
        appHighlight: "#181818",
        appLightText: "#8a8f98",
        appMint: "#00df9a"
      },
      height: {
        app500: "500px",
        app700: "700px"
      },
      width: {
        app500: "500px",
        app1000: "1000px",
        app2000: "2000px"
      },
      lineHeight: {
        12: '3.75rem'
      },
      dropShadow: {
        '4xl': '0px 5px 7px rgba(5, 5, 5, .85)'
      }
    },
  },
  plugins: [],
}
