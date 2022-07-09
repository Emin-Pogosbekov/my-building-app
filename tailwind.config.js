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
        appLightText: "#8a8f98",
        appMint: "#00df9a",
      },
      height: {
        app700: "700px",
      },
      width: {
        app500: "500px",
      },
      lineHeight: {
        12: '3.75rem'
      }
    },
  },
  plugins: [],
}
