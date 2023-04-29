/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  darkMode: 'class',

  theme: {
    screens: {
      'xs': '440px',

      'sm': '545px',

      'md': '799px',

      'lg': '999px',

      'xl': '1199px',

      '2xl': '1680px',
    },
    extend: {
      colors: {
        default: {
          'red': '#ff3b30',
          'orange': '#d16f04',
          'yellow': '#ffcc00',
          'green': '#34c759',
          'teal': '#5ac8fa',
          'blue': '#007aff',
          'royalBlue': '#405DE6',
          'indigo': '#5856d6',
          'purple': '#af52de',
          'pink': '#ff2d55',
          'orange2': '#FF8500'
        },
        neutral: {
          'gray-06': '#F2F2F7',
          'gray-05': '#E5E5EA',
          'gray-04': '#D1D1D6',
          'gray-03': '#C7C7CC',
          'gray-02': '#AEAEB2',
          'gray-01': '#8E8E93',
          'black' : '#1d1d1d'
        },
        darkBackground: {
          'darkBg': '#2c2c2e',
          'bgDark': '#1C1C1E',
          'cardDarkBg': '#38383b'
        },
        spotify: {
          'spotify' : '#1ED760'
        },
        fill: {
          'primary': 'rgba(120, 120, 128, .2)',
          'secondary': 'rgba(120, 120, 128, .16)',
          'tertiary': 'rgba(118, 118, 128, .12)',
          'quarternary': 'rgba(118, 118, 128, .08)',
        },
        gradient: {
          'green2' : 'rgba(11,71,67, .9)',
          'green1' : '#052421',
          'red1': '#36070e',
          'red2': '#750f1d',
        }
      },
      borderRadius: {
        'apple': '2rem',
        'header': '.565rem',
        'button': '.625rem',
      },
      dropShadow: {
        'widget': 'inset 0 0.3rem 8rem rgba(0, 0, 0, 0.2), inset 0 0.3rem 1rem rgba(0, 0, 0, 0.2), inset 0 -0.4rem 0.4rem rgba(0, 0, 0, 0.1)',
      },
      lineHeight: {
        '4.5': '1.125rem'
      },
      borderWidth: {
        '1' : '1px'
      },
      height: {
        '12.75rem': '12.75rem',
        '20rem': '20rem',
        '130': '130px',
        '100': '100px',
      },
      width: {
        '12.75rem' : '12.75rem',
        '30rem': '30rem',
        '370': '370px',
        '424': '424px',
        '130': '130px',
        '160': '160px',
        '280': '280px',
        '380': '380px'
      },
      maxWidth: {
        '424': '424px',
        '600': '600px',
      },
      opacity: {
        '15': '15%',
        '3': '3%',
        '8': '8%',
      },
      fontSize: {
        '3.5': '35px',
        '16': '1rem',
        '18': '1.125rem',
        '14': '.875rem',
        '26': '26px'
      }
    },
  },
  plugins: [],
}