/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "sid-navy": "#181D36",
        "sid-blue": "#286D8C",
        "sid-cyan": "#38BCE2",
        "sid-purple": "#866FB1",
        "sid-pink": "#E41376",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
