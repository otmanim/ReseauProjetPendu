/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
    
  ],
  theme: {
    extend: {
      colors: {
        'notification-color-1' : '#D5F3FE',
        'notification-color-2' : '#FFE7B8',
        'application-primary' : '#141414',
        'application-secondary' : '#2A2A2A',
        'button-primary' : '#7289DA',
        'button-home-1' : '#3724AC',
        'button-home-2' : '#DF4B9F',
        'EASY1' : "#52B1C7",
        'EASY2' : "#38925C",
        'MEDIUM1' : "#E4A938",
        'MEDIUM2' : "#FE8905",
        'HARD1' : "#DF1B1B",
        'HARD2' : "#BA3030",
      },
    },
  },
  plugins: [],
}



