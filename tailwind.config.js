/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      keyframes: {
        isoMove: {
          '0%,30%': { transform: 'translateX(0)' },
          '50%,60%': { transform: 'translateX(-200px)' },
          '100%': { transform: 'translateX(0)' },
        },
        showHidden: {
          '0%,40%': { opacity: '0' },
          '50%,80%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        isoMove: 'isoMove 6s ease-in-out infinite',
        showHidden: 'showHidden 6s ease-in-out infinite',
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
