const talwin = require('@ui/cva/tailwind.config')
console.log("react",talwin);
/** @type {import('tailwindcss').Config} */
module.exports = {
    css: [
    './src/assets/main.css',
],
  content: [
    ...talwin.content,
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  },
  plugins: [],
}