/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        'movel-m': '375px',
      },
      keyframes: {
        'menu-in': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'menu-out': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        'menu-translate-in': 'menu-in 0.5s ease-in',
        'menu-translate-out': 'menu-out 0.5s ease-in-out',
      },
    },
  },
}
