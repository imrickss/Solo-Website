const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '615': '615px'
      },
      colors: {
        'solo': '#111111',
        'blue': '#1472FF',
        'purple': '#9E00FF',
        'green': '#35FF14'
      },
      fontFamily: {
        'Metropolis': ["Metropolis",'sans-serif'],
        'Metropolis-Bold': ["Metropolis-Bold",'sans-serif'],
        'Metropolis-ExtraBold': ["Metropolis-ExtraBold",'sans-serif'],
        'Metropolis-SemiBold': ["Metropolis-SemiBold",'sans-serif'],
        'Metropolis-Regular': ["Metropolis-Regular",'sans-serif'],
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

