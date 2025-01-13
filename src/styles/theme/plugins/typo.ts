import * as plugin from 'tailwindcss/plugin';

export const typography = plugin.withOptions(
  () =>
    function ({ addUtilities }) {
      addUtilities({
        // Title
        '.typo-title-18': {
          fontSize: '1.8rem',
          lineHeight: '1.4',
          letterSpacing: '-0.025em',
        },
        '.typo-title-24': {
          fontSize: '2.4rem',
          lineHeight: '1.4',
          letterSpacing: '-0.025em',
        },
        '.typo-title-32': {
          fontSize: '3.2rem',
          lineHeight: '1.2',
          letterSpacing: '-0.025em',
        },

        // Body
        '.typo-body-12': {
          fontSize: '1.2rem',
          lineHeight: '1.4',
          letterSpacing: '-0.025em',
        },
        '.typo-body-14': {
          fontSize: '1.4rem',
          lineHeight: '1.4',
          letterSpacing: '-0.025em',
        },
        '.typo-body-16': {
          fontSize: '1.6rem',
          lineHeight: '1.4',
          letterSpacing: '-0.025em',
        },
      });
    }
);
