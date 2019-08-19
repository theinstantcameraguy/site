<template>
  <h2 v-if="loading > 0">
    Loading...
  </h2>
  <div v-else>
    <section id="about" class="section is-fullheight section-feature-grey">
      <div class="container">
        <div class="content">
          <h1 class="is-medium has-text-info title">
            About Me
          </h1>
          <div class="columns">
            <div class="column">
              <figure class="image is-1by1 is-rounded">
                <img :src="aboutImage" />
              </figure>
            </div>
            <div class="column is-three-quarters">
              <vue-markdown>{{ aboutText }}</vue-markdown>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="repairs" class="section is-fullheight section-feature-grey">
      <div class="container">
        <div class="content">
          <h1 class="is-medium has-text-info title">
            Repairs
          </h1>
          <div class="columns">
            <div class="column is-three-quarters">
              <vue-markdown>{{ repairText }}</vue-markdown>
            </div>
            <div class="column">
              <div class="tile is-ancestor">
                <div class="tile is-vertical">
                  <figure class="image">
                    <img :src="repairImage1" />
                  </figure>
                  <figure class="image">
                    <img :src="repairImage2" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="instaposts" class="section is-fullheight">
      <div class="container">
        <div class="content">
          <h1 class="is-medium has-text-info title">
            Photos
          </h1>
          <instaposts />
        </div>
      </div>
    </section>
    <footer class="footer level">
      <div class="level-left">
        <div class="level-item">
          <div>
            <p class="heading is-size-3">
              Contact
            </p>
            <p>
              <b-icon slot="marker" icon="phone" type="is-danger"></b-icon>
              {{ home.phoneNumber }}
            </p>
            <p>
              <b-icon slot="marker" icon="email" type="is-danger"></b-icon>
              <a href="mailto:jake@theinstantcameraguy.com"
                >jake@theinstantcameraguy.com</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <div>
            <p class="heading is-size-3">
              Location
            </p>
            <div id="map">
              <Map :coordinates="coordinates" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import BButton from 'buefy/src/components/button/Button'
import dedent from 'graphql/jsutils/dedent'
import BIcon from 'buefy/src/components/icon/Icon'
import Map from '../components/Map'
import Instaposts from '../components/Instaposts'
import home from '~/queries/fetchIndex'
import repair from '~/queries/fetchRepair'
import about from '~/queries/fetchAbout'
import social from '~/queries/fetchSocial'

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { BIcon, Map, BButton, VueMarkdown, Instaposts },
  data: () => ({
    loading: 0
  }),
  computed: {
    coordinates: function() {
      return [this.home.pagelocation.longitude, this.home.pagelocation.latitude]
    },
    aboutText: function() {
      return dedent(this.home.introText)
    },
    aboutImage: function() {
      return (
        this.aboutPage.photo.url +
        '?fp-y=.18&fit=crop&w=200&h=200&mask=ellipse&w=480&h=480'
      )
    },
    repairText: function() {
      return dedent(this.repairPage.repair[0].description)
    },
    repairImage1: function() {
      return (
        this.repairPage.repair[0].examples[0].url +
        '?fp-x=.35&fp-y=.5&fp-z=1.5&mask=corners&w=480&h=480&fit=crop&w=300&h=300'
      )
    },
    repairImage2: function() {
      return (
        this.repairPage.repair[0].examples[1].url +
        '?fp-x=.65&fp-y=.5&fp-z=1.5&mask=corners&w=480&h=480&fit=crop&w=300&h=300'
      )
    }
  },
  // head(): {
  //   meta: [
  //     { hid: 'description',
  //       name: 'description',
  //       content: 'About our company Nuxt.js ' }
  //     ]
  // },
  apollo: {
    $loadingKey: 'loading',
    // fetchPolicy: 'cache-and-network',
    home: {
      query: home
    },
    repairPage: {
      query: repair
    },
    allSocialProfiles: {
      query: social
    },
    aboutPage: {
      query: about
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

#prebuildtitle,
#title {
  letter-spacing: 1px;
  font-size: 5rem !important;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.82);
}

#prebuildsubtitle,
#subtitle {
  word-spacing: 5px;
  font-size: 3rem !important;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.77);
}
#map {
  height: 260px;
}
</style>

<style lang="scss">
$orange: #f0ad4e;
$yellow: #ffd500;
$green: #02b875;
$blue: #45b2d3;
$red: #d9534f;

$link: #4582ec;
$danger: $orange;

$subtitle-color: $green;

$family-heading: 'Raleway', 'Lucida Grande', 'Lucida Sans Unicode',
  'Lucida Sans', Geneva, Arial, sans-serif;

$family-serif: Georgia, Cambria, 'Times New Roman', Times, serif;

$navbar-height: 5rem;

$navbar-background-color: $orange;
</style>
