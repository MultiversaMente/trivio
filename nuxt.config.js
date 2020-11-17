import tailwindTypography from '@tailwindcss/typography'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  server: {
    host: '',
  },
  // router: {
  //   base: '/trivio/',
  // },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Collana Trivio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'site_name', content: 'Collana Trivio' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Collana Trivio' },
      { hid: 'og:title', name: 'og:title', content: 'Collana Trivio' },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Collana Trivio è la prima linea editoriale dedicata ai Librigame della Casa Editrice Il Barone Games. In arrivo un crowdfunding che finanzierà un triplice progetto.',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Collana Trivio è la prima linea editoriale dedicata ai Librigame della Casa Editrice Il Barone Games. In arrivo un crowdfunding che finanzierà un triplice progetto.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          "Librigame, Librogame, Avventure a bivi, L'Artiglio in fiamme, Echo 931, La città che ride",
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/icons', '@/plugins/mixins.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/gtm',
  ],

  gtm: {
    id: 'GTM-MFPSWZM',
    pageTracking: true,
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
