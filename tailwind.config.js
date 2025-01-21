/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        desktop: "url('/src/assets/images/pattern-bg-desktop.png')",
        mobile: "url('/src/assets/images/pattern-bg-mobile.png')",
      },
    },
  },
  plugins: [],
};
