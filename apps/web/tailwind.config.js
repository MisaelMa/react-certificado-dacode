/** @type {import('tailwindcss').Config} */
const talwin = require('@ui/react/tailwind.config')
console.log("next ",talwin);
module.exports = {
  content: [

    ...talwin.content,
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 theme: {
    extend: {
      colors: {
        custom: '#5141EA', // Asigna el valor de tu color personalizado aquí
      },
      backgroundImage: {
        'footer-texture': "url('/footer.png')",
      },
      lineClamp: {
        7: '7',
        8: '8',
      },
    },
  },
  plugins: [
        require('@tailwindcss/line-clamp'),
  ],
}