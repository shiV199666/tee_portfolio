const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      MADE_Bruno: 'MADE_Bruno, Helvetica, Arial, sans-serif',
      primary: 'Helvetica, Arial, sans-serif',
      Coconat: 'Coconat',
      CoconatBold: 'Coconat-bold',
      secondary: 'Helvetica, Arial, sans-serif',
      tertiary: 'Aldrich',
      honey: 'Honey',
      Milkyway: 'Milkyway',
      LexendMega: 'LexendMega'
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#e07a5f',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/tiara.png')",
        services: "url('./assets/services.png')",
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 23px 10px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke-black': {
          '-webkit-text-stroke': '5px black',
        },
        '.text-stroke-red': {
          '-webkit-text-stroke': '2px red',
        },
      });
    }
  ],
};
