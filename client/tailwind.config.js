/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'desk': "url('../public/background.jpg')",
      },
      colors: {
        'custom-blue-index': '#89D3ED',
        'custom-blue-index-dark': '#255F73',
        'custom-text-color' : '#26C6C3',

        'custom-gamemode-background-color1' : '#FFC071',
        'custom-gamemode-background-color2' : '#FC636B',
        'gamemode-listPlayer-color' : '#FED0B7',
        'gamemode-modeListe-color' : '#FEC2B7',

        'game-background-color1' : '#62CBA5',
        'game-background-color2' : '#88B55C',
        'notif-background-color' : '#C1DBB3',
        
      },
      fontFamily: {
        junegull: ["JUNEGULL", "sans-serif"],
      },
    },
  },
  plugins: [],
}
