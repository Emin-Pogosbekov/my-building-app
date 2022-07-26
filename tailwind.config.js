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
        appMint: "#00df9a",
        appGreen: "#7AC943",
        appGrayAccordion: "#14151A",
        appBlocks: "#1C1D21"
      },
      height: {
        app430: "430px",
        app500: "500px",
        app600: "600px",
        app700: "700px"
      },
      width: {
        app350: "350px",
        app500: "500px",
        app1000: "1000px",
        app2000: "2000px"
      },
      lineHeight: {
        12: '3.75rem'
      },
      dropShadow: {
        '4xl': '0px 5px 7px rgba(5, 5, 5, .85)'
      },
      gap: {
        'app1': '1px'
      }
    },
  },
  plugins: [],
}
