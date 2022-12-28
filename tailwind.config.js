/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');
const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        quicksand: "'Quicksand',serif",
        poppins: "'Poppins'",
        engagement: "'Engagement'",
        imFeel: "'IM Fell Great Primer'",
        inriaSans: "'Inria Sans'",
        inter: "'Inter'",
        darkerGrotesque: "'Darker Grotesque'",
        robo: "'Roboto'",
      },
      colors: {
        divBg: '#f2f2f2',
        divDark: '#7ec8c5',
        label: '#F87D3F',
        title: '#E453AA',
        inputBg: 'rgba(255, 255, 255, 0.1)',
        faq: 'rgba(247, 115, 71, 0.2)',
        section2: '#ECF6FA',
        pup: '#262B40',
        grey: '#939499',
        arrBlue: '#6BCEFF',
        bor: '#DDDDDD',
        logo: '#909090',
        footer: '#F7F9FC',
        'footer-label': '#F7446F',
        border: '#0313a8',
        search: '#EAEAEA',
        searchLabel: '#545454',
        searchLogo: '#939499',
        category: '#EFFAFF',
        divide: '#D9D9D9',
        digital: '#FF544E',
      },
    },
  },
  plugins: [],
});
