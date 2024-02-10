/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      },
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1120px',
        '2xl': '1496px',
        380: '380px'
      }
    },

    fontSize: {
      2: '2px',
      4: '4px',
      6: '6px',
      8: '8px',
      32: '32px',
      10: '10px',
      24: '24px',
      14: '14px',
      20: '20px',
      16: '16px'
    },
    extend: {
      colors: {
        blue: '#388FF3',
        purple: '#7e5bef',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        yellow: '#ffc82c',
        'gray-dark': '#273444',
        gray: '#8E9297',
        red: '#FF0000',
        'gray-light': '#EAEDF0',
        'body-color': '#F0F3F7'
      },
      boxShadow: {
        '3xl': '0px 12px 36px 0px rgba(14, 17, 22, 0.10);'
      },
      fontFamily: {
        inter: ["'Inter'", 'sans-serif']
      },
      margin: {
        76: '76px',
        24: '24px'
      },
      padding: {
        107: '107px',
        42: '42px',
        420: '420px'
      },
      width: {
        26: '26px'
      },
      height: {
        26: '26px',
        500: '500px'
      }
    }
  },
  plugins: []
}
