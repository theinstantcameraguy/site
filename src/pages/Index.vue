<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <div>
      <section id="hero" class="hero is-fullheight is-dark">
        <div class="hero-body">
          <div id="hero-body" class="container">
            <h2
              id="subtitle"
              :data-text="home.subtitle"
              class="title has-text-centered has-text-weight-light is-1"
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
                    :src="photosSVG"
                  />
                </figure>
                <p class="title">Experience</p>
                <p class="heading">
                  I have over 10 years servicing, restoring and modifying
                  classic cameras.
                </p>
              </div>
            </div>
            <div class="column is-3 has-text-centered">
              <div class="is-centered">
                <figure class="image is-128x128 has-image-centered">
                  <img :src="cameraSVG" class="is-rounded"/>
                </figure>
                <p class="title">Repair, Service, Modify</p>
                <p class="heading">
                  I specialise in Polaroid cameras and Graflex 4x5 cameras.
                  However I can also restore other film cameras
                </p>
              </div>
            </div>
            <div class="column is-3 has-text-centered">
              <figure class="image is-128x128 has-image-centered">
                <img
                  class="is-rounded"
                  :src="droneSVG"
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
                  <img :src="aboutImage"/>
                </figure>
              </div>
              <div class="column is-three-quarters has-text-justified">
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
              <em class="has-text-primary"># </em>Repairs & Modification
            </h1>
            <div class="columns">
              <div class="column is-three-quarters has-text-justified">
                <!--                <vue-markdown>{{ repairText }}</vue-markdown>-->
                <p>
                  I offer expert restoration and repair of Polaroid cameras. If
                  your camera has an issue, I can probably fix it. Some specific
                  services I provide include:
                </p>
                <bulma-accordion id="repairs-accord" dropdown icon="plus-minus">
                  <bulma-accordion-item
                    v-for="(service, index) in $page.allService.edges"
                    :key="service.id"
                  >
                    <h4
                      slot="title"
                      v-bind:style="{ color: activeColor(index) }"
                      class="title is-6 has-weight-lighter"
                    >
                      {{ service.node.heading }}
                    </h4>
                    <div slot="content">
                      <p
                        v-for="serviceItem in service.node.serviceItems"
                        :key="serviceItem.id"
                      >
                        <vue-markdown>{{
                          serviceItem.itemDescription
                          }}
                        </vue-markdown>
                      </p>
                    </div>
                  </bulma-accordion-item>
                </bulma-accordion>
              </div>
              <div class="tile is-ancestor">
                <div class="tile is-vertical">
                  <figure class="image">
                    <g-image :src="repairImage1"/>
                  </figure>
                  <figure class="image">
                    <g-image :src="repairImage2"/>
                  </figure>
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
          <instaposts/>
        </div>
      </section>
      <footer-bar/>
    </div>

  </Layout>
</template>

<script>
  import FooterBar from "~/components/FooterBar";
  import Instaposts from "~/components/Instaposts";
  import DroneDelivery from '~/assets/undraw_drone_delivery_5vrm.svg'
  import Camera from '~/assets/undraw_camera_mg5h.svg'
  import Photos from '~/assets/undraw_photos_1nui.svg'
  import VueMarkdown from 'vue-markdown'
  import {BulmaAccordion, BulmaAccordionItem} from 'vue-bulma-accordion'

  import dedent from 'dedent'

  export default {
    metaInfo ()  {
      return {
        title: 'The Instant 📷 Guy',
        meta: [
          { key: 'description', name: 'description', content: this.home.seoSettings.description },
          {property: 'og:title', content: 'The Instant 📷 Guy'},
          {property: 'og:site_name', content: 'The Instant 📷 Guy'},
          // The list of types is available here: http://ogp.me/#types
          {property: 'og:type', content: 'website'},
          // Should the the same as your canonical link, see below.
          {property: 'og:url', content: 'https://theinstantcameraguy.com'},
          {property: 'og:image', content: this.home.seoSettings.image.url },
          // Often the same as your meta description, but not always.
          {property: 'og:description', content: this.home.seoSettings.description },

          // Twitter card
          {name: 'twitter:card', content: 'summary'},
          {name: 'twitter:site', content: 'https://theinstantcameraguy.com'},
          {name: 'twitter:title', content: 'The Instant 📷 Guy'},
          {name: 'twitter:description', content: this.home.seoSettings.description},
          // Your twitter handle, if you have one.
          // {name: 'twitter:creator', content: '@jakebright'},
          {name: 'twitter:image:src', content: this.home.seoSettings.image.url },

          // Google / Schema.org markup:
          {itemprop: 'name', content: 'The Instant 📷 Guy'},
          {itemprop: 'description', content: this.home.seoSettings.description},
          {itemprop: 'image', content: this.home.seoSettings.image.url}
        ]
      }
    },

    components: {
      FooterBar,
      VueMarkdown,
      DroneDelivery,
      Camera,
      Photos,
      Instaposts,
      BulmaAccordion,
      BulmaAccordionItem,

    },
    data: () => ({
      loading: 0
    }),
    computed: {
      home() {
        return this.$page.home.edges[0].node
      },
      cameraSVG() {
        return Camera
      },
      photosSVG() {
        return Photos
      },
      droneSVG() {
        return DroneDelivery
      },
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
          this.$page.aboutPage.edges[0].node.photo.url +
          '?fp-y=.18&fit=crop&w=200&h=200&mask=ellipse&w=480&h=480&maskbg=d4ccb9&fill=solid&fill-color=d4ccb9'
        )
      },
      repairText() {
        return dedent(this.$page.repairPage.edges[0].node.description)
      },
      repairImage1() {
        return (
          this.$page.repairPage.edges[0].node.example[0].photo.url +
          '?fp-x=.35&fp-y=.5&fp-z=1.5&mask=corners&w=480&h=480&fit=crop&w=300&h=300&maskbg=d4ccb9&fill=solid&fill-color=d4ccb9'
        )
      },
      repairImage2() {
        return (
          this.$page.repairPage.edges[0].node.example[1].photo.url +
          '?fp-x=.65&fp-y=.5&fp-z=1.5&mask=corners&w=480&h=480&fit=crop&w=300&h=300&maskbg=d4ccb9&fill=solid&fill-color=d4ccb9'
        )
      }
    },
    methods: {
      activeColor(index) {
        const colors = [
          '#3777b4',
          '#00983c',
          '#df9700',
          '#e47200',
          '#b92518',
          '#b40070'
        ]
        return colors[index % colors.length]
      }
    },
  }
</script>

<page-query>
  query {
  home: allDatoCmsHomePage {
  edges {
  node {
  copyright
  heroimage {
  url
  }
  introText
  pagelocation {
  latitude
  longitude
  }
  seoSettings {
  description
  title
  }
  subtitle
  title
  phoneNumber
  }
  }
  }
  repairPage: allDatoCmsRepairPage {
  edges {
  node {
  description
  headings
  example {
  description
  photo {
  url
  }
  }
  }
  }
  }
  allSocial: allDatoCmsSocialProfile {
  edges {
  node {
  position
  profileType
  slug
  url
  }
  }
  }
  allService: allDatoCmsService {
  edges {
  node {
  id
  heading
  serviceItems {
  id
  itemDescription
  }
  }
  }
  }
  aboutPage: allDatoCmsAboutPage {
  edges {
  node {
  bio
  photo {
  url
  }
  subtitle
  title
  }
  }
  }
  }
</page-query>

<style lang="scss">
  .card,
  #repairs-accord {
    background-color: $blanc-brown;
  }
  .hero-body {
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
  #title {
    letter-spacing: 1px;
    font-size: 5rem !important;
    background: $header-text-gradient;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
  }

  #hero-body {
    align-self: center;
    justify-self: center;
  }
  #subtitle {
    background-image: $header-text-gradient;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    word-spacing: 5px;
    font-size: 4rem !important;
    z-index: 6;
    stroke-width: 0.5px;
    -webkit-text-stroke-color: $black;
    -webkit-text-stroke-width: 0.5px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  }

  #map {
    height: 260px;
  }
  #about-text {
    color: $polaroid_blue;
  }
  #repair {
    color: $polaroid_green;
  }
  #photos {
    color: $polaroid_red;
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
