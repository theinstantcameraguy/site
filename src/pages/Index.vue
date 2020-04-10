<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <div>
      <section id="hero" class="hero is-fullheight is-dark">
        <ClientOnly>
        <vue-lazyload-bg-img
          image-class="hero-body"
          :datasrc="hero.url"
          :lgSuffix="hero.lg"
          :mdSuffix="hero.md"
          :smSuffix="hero.sm"
          background-size="auto"
          :imageSource="hero.url"
          loadingImage="760.gif"
          errorImage="polaroid.jpg"
        >
          <div id="hero-body" class="container">
            <h2
              id="subtitle"
              :data-text="home.subtitle"
              class="title has-text-centered has-text-weight-light is-1"
            >
              {{ home.subtitle }}
            </h2>
          </div>
        </vue-lazyload-bg-img>
        </ClientOnly>
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
                    alt=" Picture of Photographs"
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
                  <g-image :src="cameraSVG" class="is-rounded" alt="Picture of a Camera"/>
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
                  alt="Picture of a drone delivering goods"
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
                  <datocms-image :data="aboutImage"
                                 class="is-square"
                                 :root-style="rootStyle"
                                 />
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
              <div class="column is-centered">
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
            <h2 id="coming-soon-subtitle"
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
  import DroneDelivery from '~/assets/img/undraw_drone_delivery_5vrm.svg'
  import Camera from '~/assets/img/undraw_camera_mg5h.svg'
  import Photos from '~/assets/img/undraw_photos_1nui.svg'
  import VueMarkdown from 'vue-markdown'

  import dedent from 'dedent'
  import RepairList from '../components/RepairList'
  import { toHead } from 'vue-datocms'

  export default {
    metaInfo ()  {
      return toHead(this.$page.site.seo, this.$page.site.favicon)
    },

    components: {
      RepairList,
      FooterBar,
      VueMarkdown,
      Instaposts
    },
    data: () => ({
      loading: 0,
      rootStyle: { height: 480},
      hero: {
        url:"https://www.datocms-assets.com/12178/1586437876-favicon.png",
        lg: "?q=90&auto=format&&w=500&height=500",
        md: "?q=80&auto=format&&w=300&height=300",
        sm: "?q=60&auto=format&&w=250height=250",
      }

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
          this.$page.aboutPage.photo.responsiveImage
        )
      },
      repairText() {
        return dedent(this.$page.repairPage.edges[0].node.description)
      },

    },
  }
</script>

<page-query>
  query {
  site: _site {
  seo: globalSeo {
  facebookPageUrl
  fallbackSeo {
  description
  title
  }
  siteName
  titleSuffix
  },
  favicon: faviconMetaTags {
  attributes
  content
  tag
  }
  }
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
  aboutPage {
  bio
  photo {
  url
  responsiveImage(
  imgixParams: { fpY:0.18, mask:"ellipse" fit: crop, ar:"200:200", h:200, w:200, auto: format }
  ) {
  # HTML5 src/srcset/sizes attributes
  srcSet
  webpSrcSet
  sizes
  src

  # size information (post-transformations)
  width
  height
  aspectRatio

  # SEO attributes
  alt
  title

  # background color placeholder or...
  bgColor

  # blur-up placeholder, JPEG format, base64-encoded
  base64
  }
  }
  subtitle
  }
  allPostheros(orderBy: _createdAt_ASC) {
  title
  heading
  image {
  url
  }
  }
  }
</page-query>

<style lang="scss" scoped>
  #hero {
    background-color: $grey-darker;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 1024px - 1px) {
    #hero {
      background-position: center/80%;
    }
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
    font-family: Righteous, $family-heading;
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
    font-family: Righteous, $family-heading;
  }

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
