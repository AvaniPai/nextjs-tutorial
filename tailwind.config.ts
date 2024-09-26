import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        'sakura': '#fff0f3',
        'darksakura': '#ffb9c4',
        'sage': '#9fb393',
        'lightsage': '#b5cda9',
        'darksage': '#56694a',
        'darkmaroon': '#640d14',
        'maroon': '#800E13',
        'harvestmoon': '#EACBAB',
        'suedeboots': '#BD9774',
        'mediumbrown': '#8b6c5c',
        'lightbrown': '#d8cbc4',
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
