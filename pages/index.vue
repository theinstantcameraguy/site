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
      :style="{ backgroundImage: `url(${home.heroimage.url})` }"
    >
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered has-text-warning">
            {{ home.title }}
          </h1>
          <h2 class="subtitle has-text-centered has-text-danger">
            {{ home.subtitle }}
          </h2>
        </div>
      </div>
    </section>
    <section id="about" class="section is-fullheight">
      <div class="content">
        <h1 class="is-medium has-text-danger has-text-left title">
          <em class="has-text-primary"># </em>About
        </h1>
        <vue-markdown>
          {{ home.introText }}
        </vue-markdown>
      </div>
    </section>
  </div>
</template>

<script>
import home from '~/queries/fetchIndex'
import BButton from 'buefy/src/components/button/Button'
// import gql from 'graphql-tag'

export default {
  components: { BButton },
  data: () => ({
    loading: 0,
    dev: false
  }),
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
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
