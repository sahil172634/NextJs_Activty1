import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1200px',
    },
    extend: {
      spacing: {
        52: '52px',
        53: '53px',
        '72px': '72px',
        210: '210px',
        216: '216px',
        248: '248px',
        272: '272px',
        1200: '1200px',
      },
      colors: {
        'at-dark-700': '#666666',
        'at-dark-500': '#333333',
        'at-blue-500': 'rgb(0 115 207)',
      },
    },
  },
  plugins: [],
};
export default config;
