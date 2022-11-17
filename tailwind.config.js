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
      },
    },
  },
  plugins: [],
}



