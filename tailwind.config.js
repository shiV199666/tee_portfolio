module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      MADE_Bruno: 'MADE_Bruno, Helvetica, Arial, sans-serif',
      primary: 'Helvetica, Arial, sans-serif',
      secondary: 'Helvetica, Arial, sans-serif',
      tertiary: 'Aldrich',
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
    },
  },
  plugins: [],
};
