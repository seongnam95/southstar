import { fontFamily } from 'tailwindcss/defaultTheme';

import type { Config } from 'tailwindcss';

import { typography } from './src/styles/theme/plugins';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      currentColor: 'currentColor',
      transparent: 'transparent',

      background: 'var(--background)',
      surface: 'var(--surface)',
      foreground: {
        DEFAULT: 'var(--foreground)',
        accent: 'var(--foreground-accent)',
        muted: 'var(--foreground-muted)',
      },
      primary: {
        DEFAULT: 'var(--primary)',
        accent: 'var(--primary-accent)',
        surface: 'var(--primary-surface)',
        foreground: 'var(--primary-foreground)',
      },
      border: {
        DEFAULT: 'var(--border)',
        accent: 'var(--border-accent)',
      },
      card: {
        DEFAULT: 'var(--card)',
        foreground: 'var(--card-foreground)',
      },
    },
    fontFamily: {
      pretendard: ['var(--pretendard)', ...fontFamily.sans],
    },
  },
  plugins: [typography],
};
export default config;
