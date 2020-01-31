import pkg from './package'

require('dotenv').config()

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'The Instant Camera Guy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'keywords', content: 'camera, repair, melbourne' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#33f3ff' },

  /*
   ** Global CSS
   */
  css: [{ src: '~/assets/main.scss', lang: 'sass' }],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/jsonld'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/dotenv',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    'nuxt-buefy',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    '@nuxtjs/robots'
  ],
  styleResources: {
    scss: [
      './assets/*.scss'
      // './assets/abstracts/_mixins.scss' // use underscore "_" & also file extension ".scss"
    ]
  },
  webfontloader: {
    google: {
      families: ['Righteous:400']
    }
  },
  env: {
    DATOCMS_API: process.env.DATOCMS_API,
    INSTATOKEN: process.env.INSTATOKEN,
    MAPBOX_ACCESS_TOKEN: process.env.MAPBOX_ACCESS_TOKEN
  },
  /*
  Apollo Config
  */
  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo-config.js'
    }
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  buefy: { css: false },
  pwa: {
    manifest: {
      name: 'TICG',
      lang: 'en'
    },
    icon: {
      /* icon options */
      iconSrc: '~/static/icon.png'
    },
    meta: {
      name: 'TICG'
    }
  },
  robots: {
    UserAgent: '*',
    Disallow: '/'
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
