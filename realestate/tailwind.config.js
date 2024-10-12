/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
      // "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        'neutralSliver':"#F5F7FA",
        'neutralDGray':"#4D4D4D",
        'brandPrimary':"#4CAFAF",
        'neutralGray':"#717171",
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

