// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Buefy from 'buefy'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight, faAngleLeft, faChevronRight, faChevronLeft, faEnvelope, faPhone, faTree } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookMessenger, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import VueMarkdown from 'vue-markdown'

import 'buefy/dist/buefy.css'
import '~/assets/main.scss'
import { DatocmsImagePlugin, toHead } from 'vue-datocms'
import VueLazyload from 'vue-lazyload'

library.add(faYoutube, faFacebook, faFacebookMessenger, faInstagram, faTree, faEnvelope, faPhone,
  faChevronLeft, faChevronRight, faAngleRight, faAngleLeft)

export default function (Vue, { router, head, isClient }) {
  head.link.push(
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Roboto:400,700&family=Righteous:400&family=Helvetica+Neue:400,700&family=Source+Sans+Pro:400,700&display=swap'
    }
  )

  head.meta.push(
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'keywords', content: 'camera, servicing, repair, melbourne, polaroid, graflex' },
    { name: 'description', content: 'Camera servicing and repairs by Jake Bright. Specializing in the sales, servicing' +
        'restoration and modification of classic Polaroid cameras and Graflex 4x5 cameras.' },
    { name: 'title', content: 'The Instant 📷 Guy' }
  )
  head.link.push({ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' })
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueMarkdown)
  Vue.component('vue-fontawesome', FontAwesomeIcon)
  Vue.use(Buefy, {
    defaultIconComponent: 'vue-fontawesome',
    defaultIconPack: 'fas'
  })

  Vue.use(VueLazyload, {
    loading: '~/src/assets/760.gif',
  })
  Vue.use(DatocmsImagePlugin)
}