<template>
  <div>
    <NavBar v-if="dev" />
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>

<script>
import NavBar from '../components/NavBar'
import seo from '~/queries/fetchSEO'
import repair from '~/queries/fetchRepair'

export default {
  components: {
    NavBar
  },
  data() {
    return {
      dev: true
    }
  },
  head: {
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'cool'
      },
      {
        rel: 'icon',
        type: 'image/png',
        // Need to figure out how to do this
        href: '~/static/favicon.ico' || this._site.favicon.url
      }
    ]
  },
  // See https://developers.google.com/search/docs/data-types/local-business#definitions
  jsonld: {
    '@context': 'http://schema.org',
    '@type': 'LocalBusiness',
    email: 'jake@theinstantcameraguy.com',
    image: []
  },
  apollo: {
    $loadingKey: 'loading',
    // fetchPolicy: 'cache-and-network',
    _site: {
      query: seo
    },
    repairPage: {
      query: repair
    }
  }
}
</script>

<style lang="scss">
body {
  background: $blanc-brown;
}
.footer {
  background-color: $blanc-brown !important;
}
</style>
