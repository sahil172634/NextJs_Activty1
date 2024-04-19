import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      xmd: '1024px',
      lg: '1200px',
    },
    extend: {
      fontFamily: {
        'golos-text': ['Golos Text', 'sans-serif'],
      },
      spacing: {
        52: '52px',
        53: '53px',
        55: '55px',
        '72px': '72px',
        75: '75px',
        186: '186px',
        210: '210px',
        216: '216px',
        248: '248px',
        272: '272px',
        446: '446px',
        474: '474px',
        500: '500px',
        1200: '1200px',
        '58%': '58%',
      },
      colors: {
        'at-dark-700': '#666666',
        'at-dark-500': '#333333',
        'at-blue-500': 'rgb(0 115 207)',
        'at-blue-50': 'rgb(232 244 253)',
        'at-light-500': 'rgb(234 234 234)',
        'at-light-200': 'rgb(246 246 246)',
      },
    },
  },
  plugins: [],
};
export default config;
