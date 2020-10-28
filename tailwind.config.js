module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          'h1, h2, h3, h4, h5': {
            color: theme('colors.white'),
          },
        },
      },
      // fantasy: {
      //   css: {
      //     'h1, h2, h3, h4, h5': {
      //       'font-family': 'Goudy Mediaeval Regular, roboto, sans-serif',
      //     },
      //   },
      // },
      // scifi: {
      //   css: {
      //     'h1, h2, h3, h4, h5': {
      //       'font-family': 'Futura, roboto, sans-serif',
      //     },
      //   },
      // },
      // horror: {
      //   css: {
      //     'h1, h2, h3, h4, h5': {
      //       'font-family': 'D Day Stencil, roboto, sans-serif',
      //     },
      //   },
      // },
    }),
    extend: {
      colors: {
        accent: '#9C37B5',
        brand: {
          light: '#572361',
          dark: '#17162E',
        },
        fantasy: {
          light: '#8D082E80',
          dark: '#611A2C80',
        },
        scifi: {
          light: '#406A8880',
          dark: '#263D5980',
        },
        horror: {
          light: '#72925880',
          dark: '#2D4A3180',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
