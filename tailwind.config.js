/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"]
      },
      colors: {
        "coffee": {
          200:  "#c89f94",
          500: "#ad6b17",
          800: "#6c410b"
        }
      },
      animation: {
        'slide-down': 'slide-down 0.5s ease-in-out',
      },
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      }
      }
    },
  plugins: [],
}