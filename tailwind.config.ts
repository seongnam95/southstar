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
    fontFamily: {
      pretendard: ['var(--pretendard)', ...fontFamily.sans],
    },
  },
  plugins: [typography],
};
export default config;
