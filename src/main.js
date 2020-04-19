// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '@/layouts/Default.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import {
  faAdjust,
  faAngleLeft,
  faAngleRight,
  faCamera,
  faCameraRetro,
  faCarBattery,
  faChevronLeft,
  faChevronRight,
  faEnvelope,
  faEye,
  faHandSparkles,
  faPhone,
  faSync,
  faTools,
  faTree,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faFacebookMessenger,
  faFlickr,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import VueMarkdown from 'vue-markdown'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { DatocmsImagePlugin } from 'vue-datocms'
import VueLazyload from 'vue-lazyload'
import VueMq from 'vue-mq'

import VueLazyLoadBackgroundImage from '@/components/VueLazyLoadBackgroundImage'

library.add(
  faYoutube,
  faFacebook,
  faFacebookMessenger,
  faInstagram,
  faTree,
  faEnvelope,
  faPhone,
  faChevronLeft,
  faChevronRight,
  faAngleRight,
  faAngleLeft,
  faFlickr,
  faEye,
  faHandSparkles,
  faCameraRetro,
  faCamera,
  faCarBattery,
  faSync,
  faAdjust,
  faTools
)

// add web fonts
require('typeface-source-sans-pro')
require('typeface-roboto')
require('typeface-righteous')

// Can also access { router, head, isClient }
export default function (Vue, { head }) {
  head.link.push(
    { rel: 'preconnect', href: 'https://www.datocms-assets.com' },
    { rel: 'preconnect', href: 'https://storage.googleapis.com' }
  )

  head.meta.push(
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'keywords',
      content:
        'camera, polaroid, graflex, servicing, repair, melbourne, victoria, australia, hawthorn',
    },
    {
      name: 'description',
      content:
        'Australia’s home for Polaroid and Instant Camera Repairs. Specializing in the servicing, restoration and ' +
        'modification of  Polaroid cameras and classic cameras.',
    },
    { name: 'title', content: 'The Instant 📷 Guy' }
  )
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css',
  })

  head.link.push({
    rel: 'icon',
    type: 'image/x-icon',
    href: '~/src/assets/favicon.ico',
  })
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueMarkdown)
  Vue.component('vue-fontawesome', FontAwesomeIcon)
  Vue.use(Buefy, {
    defaultIconComponent: 'vue-fontawesome',
    defaultIconPack: 'fas',
    customIconPacks: {
      fas: {
        sizes: {
          'is-small': 'sm',
          'is-medium': '2x',
          'is-large': '4x',
        },
      },
    },
  })

  Vue.component('vue-lazyload-bg-img', VueLazyLoadBackgroundImage)
  Vue.use(VueLazyload, {
    loading: '760.gif',
  })
  Vue.use(DatocmsImagePlugin)

  Vue.use(VueMq, {
    breakpoints: {
      sm: 768,
      md: 1023,
      lg: Infinity,
    },
  })
}
