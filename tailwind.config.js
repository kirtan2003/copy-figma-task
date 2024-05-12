/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        customBlue: 'rgba(6, 40, 110, 1)',
        customGray: 'rgba(105, 102, 113, 1)',
       textColor: 'rgba(40, 38, 44, 1)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-customBlue': {
          color: 'rgba(6, 40, 110, 1)',
        },
        '.text-customGray': {
          color: 'rgba(105, 102, 113, 1)',
        },
        '.text-textColor': {
          color: 'rgba(40, 38, 44, 1)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
