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
        class="section is-medium"
      >
        <div id="post-hero" class="container is-flex ">
          <div id="post-content" class="item columns">
            <div class="column is-3 has-text-centered">
              <div class="is-centered">
                <figure class="image is-128x128 has-image-centered">
                  <g-image
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
                  <g-image :src="cameraSVG" class="is-rounded"/>
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
                <g-image
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

      <section id="background_section" class="section is-medium section-feature-grey">
        <div class="container">
          <div class="content">
            <h1 id="about-text" class="is-medium has-text-left title">
              <em class="has-text-primary"># </em>About
            </h1>
            <h2 class="is-medium  title">
              THE INSTANT CAMERA GUY
            </h2>
            <div class="columns">
              <div class="column">
                <figure class="image is-1by1 is-rounded">
                  <g-image :src="aboutImage"/>
                </figure>
              </div>
              <div class="column is-three-quarters has-text-justified">
                <vue-markdown>{{ aboutText }}</vue-markdown>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="repairs" class="section is-medium">
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
              </div>
            </div>
            <div class="container">
              <RepairList />
            </div>
          </div>

        </div>
      </section>
      <section id="instaposts" class="section is-medium">
        <div class="container">
          <div class="content">
            <h1 id="photos" class="is-medium has-text-left title">
              <em class="has-text-primary"># </em>Photos
            </h1>
          </div>
          <instaposts/>
        </div>
      </section>
      <section id="coming-soon" class="section is-large">
        <div class="container">
          <div class="content">
            <h1
              id="coming-soon-title"
              class="title has-text-centered  is-1"
            >
              More to Come ...
            </h1>
            <h2              id="coming-soon-subtitle"
                             class="subtitle has-text-centered has-text-weight-light is-3"

            >
              Blog Posts, Previous Work and projects will be coming soon. Stay Tuned !
            </h2>
          </div>

        </div>
      </section>

      <footer-bar/>
    </div>

  </Layout>
</template>

<script>
  import FooterBar from '~/components/FooterBar'
  import Instaposts from '~/components/Instaposts'
  import DroneDelivery from '~/assets/undraw_drone_delivery_5vrm.svg'
  import Camera from '~/assets/undraw_camera_mg5h.svg'
  import Photos from '~/assets/undraw_photos_1nui.svg'
  import VueMarkdown from 'vue-markdown'

  import dedent from 'dedent'
  import RepairList from './RepairList'

  export default {
    metaInfo ()  {
      const desc = 'Camera servicing and repairs by Jake Bright. Specializing in the sales, servicing, ' +
        'restoration and modification of classic Polaroid cameras and Graflex 4x5 cameras.'
      const og_image = "~@/assets/polaroid600.png"
      return {
        title: 'The Instant 📷 Guy',
        meta: [
          { key: 'description', name: 'description', content: this.home.seoSettings.description | desc},
          {property: 'og:title', content: 'The Instant 📷 Guy'},
          {property: 'og:site_name', content: 'The Instant 📷 Guy'},
          // The list of types is available here: http://ogp.me/#types
          {property: 'og:type', content: 'website'},
          // Should the the same as your canonical link, see below.
          {property: 'og:url', content: 'https://theinstantcameraguy.com'},
          {property: 'og:image', content: this.home.seoSettings.image.url | og_image },
          // Often the same as your meta description, but not always.
          {property: 'og:description', content: this.home.seoSettings.description | desc },

          // Twitter card
          {name: 'twitter:card', content: 'summary'},
          {name: 'twitter:site', content: 'https://theinstantcameraguy.com'},
          {name: 'twitter:title', content: 'The Instant 📷 Guy'},
          {name: 'twitter:description', content: this.home.seoSettings.description | desc },
          // Your twitter handle, if you have one.
          // {name: 'twitter:creator', content: '@jakebright'},
          {name: 'twitter:image:src', content: this.home.seoSettings.image.url | og_image},

          // Google / Schema.org markup:
          {itemprop: 'name', content: 'The Instant 📷 Guy'},
          {itemprop: 'description', content: this.home.seoSettings.description | desc },
          {itemprop: 'image', content: this.home.seoSettings.image.url | og_image }
        ]
      }
    },

    components: {
      RepairList,
      FooterBar,
      VueMarkdown,
      Instaposts

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
          '?fp-y=.18&fit=crop&w=200&h=200&mask=ellipse&w=480&h=480'
        )
      },
      repairText() {
        return dedent(this.$page.repairPage.edges[0].node.description)
      },

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
    }
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
  image {
  url
  }
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

  #about-text {
    color: $polaroid_blue;
  }

  #photos {
    color: $polaroid_red;
  }

  #about-level {
    background-color: $polaroid_blue;
  }

  #repairs {
    background-color: $polaroid_green;
  }


  #coming-soon {
    background-color: $polaroid_red;
  }
</style>
