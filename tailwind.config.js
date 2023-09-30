/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(228,155,148,1) 100%)',
      },
    },
  },
  plugins: [],
};