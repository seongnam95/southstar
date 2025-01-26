import { fontFamily } from 'tailwindcss/defaultTheme';

import type { Config } from 'tailwindcss';

import { typography } from './src/styles/theme/plugins';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      currentColor: 'currentColor',
      transparent: 'transparent',

      primary: 'hsl(var(--primary))',

      background: 'hsl(var(--background))',
      surface: 'hsl(var(--surface))',
      surfaceAccent: 'hsl(var(--surface-accent))',

      foreground: {
        DEFAULT: 'hsl(var(--foreground))',
        accent: 'hsl(var(--foreground-accent))',
        muted: 'hsl(var(--foreground-muted))',
        subtle: 'hsl(var(--foreground-subtle))',
      },

      border: 'hsl(var(--border))',
    },
    spacing: {
      px: '1px',
      0: '0',
      1.5: '0.6rem',
      ...Object.fromEntries(
        Array.from({ length: 30 }, (_, i) => [
          i + 1,
          `${((i + 1) * 4) / 10}rem`,
        ])
      ),
    },
    screens: {
      sm: '500px',
      md: '768px',
      lg: '1200px',
    },
    borderRadius: {
      sm: '0.4rem',
      md: '0.8rem',
      lg: '1.2rem',
      xl: '1.6rem',
      '2xl': '1.8rem',
      full: '999rem',
    },
    fontFamily: {
      pretendard: ['var(--pretendard)', ...fontFamily.sans],
    },
    extend: {
      boxShadow: {
        white: '0 0 1.2rem 0.1rem rgba(255, 255, 255, 0.9)',
      },
    },
  },
  plugins: [typography],
};
export default config;
