<template>
  <div>
    <h2 v-if="loading > 0">
      Loading...
    </h2>
    <div v-else>
      <section
        id="hero"
        :style="{
          backgroundImage: `url(${home.heroimage.url}?blend-mode=lighten&bg=d4ccb9&fill=solid&fill-color=d4ccb9&duotone=d4ccb9,484d4b&duotone-alpha=63)`
        }"
        class="hero is-fullheight-with-navbar"
      >
        <div class="hero-body">
          <div class="container">
            <h1
              id="title"
              :data-text="home.title"
              class="has-text-centered is-1"
            >
              {{ home.title }}
            </h1>
            <h2
              id="subtitle"
              :data-text="home.subtitle"
              class="has-text-centered has-text-weight-light is-3"
            >
              {{ home.subtitle }}
            </h2>
          </div>
        </div>
      </section>
      <section
        id="about-level"
        class="section is-fullheight section-feature-grey"
      >
        <div id="post-hero" class="container is-flex ">
          <div id="post-content" class="item columns">
            <div class="column is-3 has-text-centered">
              <div class="is-centered">
                <figure class="image is-128x128 has-image-centered">
                  <img
                    class="is-rounded"
                    src="~/assets/undraw_photos_1nui.svg"
                  />
                </figure>
                <p class="title">Experience</p>
                <p class="heading">
                  Over 10 years servicing, restoring and modifying classic
                  cameras.
                </p>
              </div>
            </div>
            <div class="column is-3 has-text-centered">
              <div class="is-centered">
                <figure class="image is-128x128 has-image-centered">
                  <img
                    class="is-rounded"
                    src="~/assets/undraw_camera_mg5h.svg"
                  />
                </figure>
                <p class="title">Repair, Service, Modify</p>
                <p class="heading">
                  Specialise in Polaroid cameras and Graflex 4x5 cameras. Also
                  occasionally restore other film cameras
                </p>
              </div>
            </div>
            <div class="column is-3 has-text-centered">
              <figure class="image is-128x128 has-image-centered">
                <img
                  class="is-rounded"
                  src="~/assets/undraw_drone_delivery_5vrm.svg"
                />
              </figure>
              <p class="title">Ship Australia Wide</p>
              <p class="heading">
                I ship Australia wide. If you are overseas, no worries! I ship
                pretty much anywhere! Just ask me for a quote!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="section is-fullheight section-feature-grey">
        <div class="container">
          <div class="content">
            <h1 id="about-text" class="is-medium has-text-left title">
              <em class="has-text-primary"># </em>About
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
            <h1 id="repair" class="is-medium has-text-left title">
              <em class="has-text-primary"># </em>Repairs
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
            <h1 id="photos" class="is-medium has-text-left title">
              <em class="has-text-primary"># </em>Photos
            </h1>
          </div>
          <instaposts />
        </div>
      </section>
      <footer-bar />
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import BButton from 'buefy/src/components/button/Button'
import dedent from 'graphql/jsutils/dedent'
import BIcon from 'buefy/src/components/icon/Icon'
import Map from '../components/Map'
import Instaposts from '../components/Instaposts'
import FooterBar from '../components/FooterBar'
import home from '~/queries/fetchIndex'
import repair from '~/queries/fetchRepair'
import about from '~/queries/fetchAbout'
import social from '~/queries/fetchSocial'

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { FooterBar, BIcon, Map, BButton, VueMarkdown, Instaposts },
  data: () => ({
    loading: 0
  }),
  computed: {
    coordinates() {
      return [this.home.pagelocation.longitude, this.home.pagelocation.latitude]
    },
    hrefPhone() {
      return this.home.phoneNumber.startsWith('0')
        ? 'tel:+61' + this.home.phoneNumber.replace(/^0/, '')
        : this.home.phoneNumber
    },
    aboutText() {
      return dedent(this.home.introText)
    },
    aboutImage() {
      return (
        this.aboutPage.photo.url +
        '?fp-y=.18&fit=crop&w=200&h=200&mask=ellipse&w=480&h=480&maskbg=d4ccb9&fill=solid&fill-color=d4ccb9'
      )
    },
    repairText() {
      return dedent(this.repairPage.repair[0].description)
    },
    repairImage1() {
      return (
        this.repairPage.repair[0].examples[0].url +
        '?fp-x=.35&fp-y=.5&fp-z=1.5&mask=corners&w=480&h=480&fit=crop&w=300&h=300&maskbg=d4ccb9&fill=solid&fill-color=d4ccb9'
      )
    },
    repairImage2() {
      return (
        this.repairPage.repair[0].examples[1].url +
        '?fp-x=.65&fp-y=.5&fp-z=1.5&mask=corners&w=480&h=480&fit=crop&w=300&h=300&maskbg=d4ccb9&fill=solid&fill-color=d4ccb9'
      )
    }
  },
  apollo: {
    $loadingKey: 'loading',
    // fetchPolicy: 'cache-and-network',
    home: {
      prefetch: true,
      query: home
    },
    repairPage: {
      prefetch: true,
      query: repair
    },
    allSocialProfiles: {
      prefetch: true,
      query: social
    },
    aboutPage: {
      prefetch: true,
      query: about
    }
  }
}
</script>

<style lang="scss">
#hero {
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

img {
  background-color: $bison-hide-grey;
}

#title {
  letter-spacing: 1px;
  font-size: 5rem !important;
  background: $header-text-gradient;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

#subtitle {
  background: $header-text-gradient;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  word-spacing: 5px;
  font-size: 3rem !important;
  position: relative;
  z-index: 10;
}

#map {
  height: 260px;
}
#about-text {
  color: $eggplant;
}
#repair {
  color: $gold;
}
#photos {
  color: $fuschia;
}

#post-content {
  justify-content: space-between;
  align-content: center;
  flex-flow: row wrap;
  align-self: center;
}
.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}
$family-heading: 'Raleway', 'Lucida Grande', 'Lucida Sans Unicode',
  'Lucida Sans', Geneva, Arial, sans-serif;

$family-serif: Georgia, Cambria, 'Times New Roman', Times, serif;

$navbar-height: 5rem;
</style>
