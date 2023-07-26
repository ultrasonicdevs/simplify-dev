import plugin from 'tailwindcss/plugin'

const simplifyDefaults = plugin(({ addBase, theme, config }) => {
  addBase({
    h1: {
      fontSize: config('fontSize.h1-fs'),
      lineHeight: theme('lineHeight.h1-lh'),
      fontWeight: config('theme.extends.fontWeight.h1-fw'),
      color: theme('colors.h1-col'),
    },
    h2: {
      fontSize: 'fontSize.h2-fs',
      lineHeight: 'lineHeight.h2-lh',
      fontWeight: 'fontWeight.h2-fw',
      color: 'colors.h2-col',
    },
    h3: {
      fontSize: 'fontSize.h3-fs',
      lineHeight: 'lineHeight.h2-lh',
      fontWeight: 'fontWeight.h3-fw',
      color: 'colors.h3-col',
    },
    h4: {
      fontSize: 'fontSize.h4-fs',
      lineHeight: 'lineHeight.h4-lh',
      fontWeight: 'fontWeight.h4-fw',
      color: 'colors.h4-col',
    },
    h5: {
      fontSize: 'fontSize.h5-fs',
      lineHeight: 'lineHeight.h5-lh',
      fontWeight: 'fontWeight.h5-fw',
      color: 'colors.h5-col',
    },
    h6: {
      fontSize: 'fontSize.h6-fs',
      lineHeight: 'lineHeight.h6-lh',
      fontWeight: 'fontWeight.h6-fw',
      color: 'colors.h6-col',
    },
    span: {
      fontSize: 'fontSize.span-fs',
      lineHeight: 'lineHeight.span-lh',
      fontWeight: 'fontWeight.span-fw',
      color: 'colors.span-col',
    },
    label: {
      fontSize: 'fontSize.label-fs',
      lineHeight: 'lineHeight.label-lh',
      fontWeight: 'fontWeight.label-fw',
      color: 'colors.label-col',
    },
    p: {
      fontSize: 'fontSize.p-fs',
      lineHeight: 'lineHeight.p-lh',
      fontWeight: 'fontWeight.p-fw',
      color: 'colors.p-col',
    },
    input: {
      backgroundColor: 'colors.transparent',
      outlineOffset: 'outlineOffset.0',
      fontSize: 'fontSize.inp',
      marginX: 'padding.inp-mx',
      marginY: 'padding.inp-my',
      outline: 'outline.none',
    },
  })
})

export default simplifyDefaults
