<template>
  <div v-if="!dev">
    <section id="hero-prod" class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">
            The Instant Camera Guy
          </h1>
          <h2 class="subtitle has-text-centered">
            Coming Soon
          </h2>
        </div>
      </div>
    </section>
    <section class="section is-fullheight">
      <div class="content">
        <b-button type="is-dark" @click="dev = !dev">
          Enter 🚧 Site
        </b-button>
      </div>
    </section>
  </div>
  <h2 v-else-if="dev && loading > 0">
    Loading...
  </h2>
  <div v-else>
    <section
      id="hero"
      class="hero is-fullheight"
      :style="{ backgroundImage: `url(${home.heroimage.url}?sepia=65)` }"
    >
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered has-text-dark">
            {{ home.title }}
          </h1>
          <h2 class="subtitle has-text-centered has-text-grey-light">
            {{ home.subtitle }}
          </h2>
        </div>
      </div>
    </section>
    <section id="about" class="section is-fullheight">
      <div class="container">
        <div class="content">
          <h1 class="is-medium has-text-danger has-text-left title">
            <em class="has-text-primary"># </em>About
          </h1>

          <vue-markdown>
            {{ home.introText }}
          </vue-markdown>
        </div>
      </div>
    </section>
    <section id="location" class="section is-fullheight">
      <div class="container">
        <div class="content">
          <h1 class="is-medium has-text-danger has-text-left title">
            <em class="has-text-primary"># </em>Location
          </h1>
        </div>
        <Map :coordinates="coordinates" />
      </div>
    </section>
    <section id="instaposts" class="section is-fullheight">
      <div class="container">
        <div class="content">
          <h1 class="is-medium has-text-danger has-text-left title">
            <em class="has-text-primary"># </em>Photos
          </h1>
          <instaposts />
        </div>
        <Map :coordinates="coordinates" />
      </div>
    </section>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import BButton from 'buefy/src/components/button/Button'
import Map from '../components/Map'
import Instaposts from '../components/Instaposts'
import home from '~/queries/fetchIndex'
// import gql from 'graphql-tag'

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { Map, BButton, VueMarkdown, Instaposts },
  data: () => ({
    loading: 0,
    dev: false
  }),
  computed: {
    coordinates: function() {
      return [this.home.pagelocation.longitude, this.home.pagelocation.latitude]
    }
  },
  apollo: {
    $loadingKey: 'loading',
    home: {
      query: home
    }
  }
}
</script>

<style>
#hero {
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
}
</style>
