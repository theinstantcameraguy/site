// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Buefy from 'buefy'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTree, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faFacebook, faFacebookMessenger, faInstagram} from '@fortawesome/free-brands-svg-icons'
library.add(faYoutube,faFacebook,  faFacebookMessenger, faInstagram, faTree, faEnvelope, faPhone)
import VueMarkdown from "vue-markdown";

import 'buefy/dist/buefy.css'
import '~/assets/main.scss'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css'
  },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Roboto:400,700&family=Righteous:400&family=Helvetica+Neue:400,700&family=Source+Sans+Pro:400,700&display=swap'
    }
    );

  head.meta.push(
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Classic Camera Repairs By Jake Bright" },
      { name: 'keywords', content: 'camera, servicing, repair, melbourne, polaroid, graflex' }
  );
    head.link.push({ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' });
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueMarkdown)
  Vue.component('vue-fontawesome', FontAwesomeIcon);
  Vue.use(Buefy, {
    defaultIconComponent: 'vue-fontawesome',
    defaultIconPack: 'fas'
  })}
