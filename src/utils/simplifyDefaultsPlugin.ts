import plugin from 'tailwindcss/plugin';

export const simplifyDefaultsPlugin = plugin(({ addBase, theme }) => {
  addBase({
    h1: {
      fontSize: theme('fontSize.h1-fs'),
      lineHeight: theme('lineHeight.h1-lh'),
      fontWeight: theme('fontWeight.h1-fw'),
      color: theme('COLORS.h1-col')
    },
    h2: {
      fontSize: theme('fontSize.h2-fs'),
      lineHeight: theme('lineHeight.h2-lh'),
      fontWeight: theme('fontWeight.h2-fw'),
      color: theme('COLORS.h2-col')
    },
    h3: {
      fontSize: theme('fontSize.h3-fs'),
      lineHeight: theme('lineHeight.h2-lh'),
      fontWeight: theme('fontWeight.h3-fw'),
      color: theme('COLORS.h3-col')
    },
    h4: {
      fontSize: theme('fontSize.h4-fs'),
      lineHeight: theme('lineHeight.h4-lh'),
      fontWeight: theme('fontWeight.h4-fw'),
      color: theme('COLORS.h4-col')
    },
    h5: {
      fontSize: theme('fontSize.h5-fs'),
      lineHeight: theme('lineHeight.h5-lh'),
      fontWeight: theme('fontWeight.h5-fw'),
      color: theme('COLORS.h5-col')
    },
    h6: {
      fontSize: theme('fontSize.h6-fs'),
      lineHeight: theme('lineHeight.h6-lh'),
      fontWeight: theme('fontWeight.h6-fw'),
      color: theme('COLORS.h6-col')
    },
    span: {
      fontSize: theme('fontSize.span-fs'),
      lineHeight: theme('lineHeight.span-lh'),
      fontWeight: theme('fontWeight.span-fw'),
      color: theme('COLORS.span-col')
    },
    label: {
      fontSize: theme('fontSize.label-fs'),
      lineHeight: theme('lineHeight.label-lh'),
      fontWeight: theme('fontWeight.label-fw'),
      color: theme('COLORS.label-col')
    },
    p: {
      fontSize: theme('fontSize.p-fs'),
      lineHeight: theme('lineHeight.p-lh'),
      fontWeight: theme('fontWeight.p-fw'),
      color: theme('COLORS.p-col')
    },
    input: {
      backgroundColor: theme('COLORS.transparent'),
      outlineOffset: theme('outlineOffset.0'),
      fontSize: theme('fontSize.inp'),
      outline: theme('outline.0')
    }
  });
});
