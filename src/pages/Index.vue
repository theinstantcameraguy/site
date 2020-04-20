<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <div>
      <section class="hero is-fullheight is-dark" id="hero">
        <ClientOnly>
          <vue-lazyload-bg-img
            :datasrc="hero.url"
            :imageSource="hero.url"
            :backgroundPosition="hero.backgroundPosition"
            :backgroundColor="heroBgColor"
            error-image="760.gif"
            id="hero-img"
            image-class="hero-body"
            loading-image="760.gif"
          >
            <div class="container" id="hero-body">
              <h2
                :data-text="this.$page.home.subtitle"
                class="title has-text-centered has-text-weight-light is-1 is-5-mobile"
                id="title"
              >
                {{ this.$page.home.subtitle }}
              </h2>
            </div>
          </vue-lazyload-bg-img>
        </ClientOnly>
      </section>
      <section class="section is-medium" id="about-level">
        <div class="container is-flex" id="post-hero">
          <div class="item columns" id="post-content">
            <div
              v-for="(ph, i) in postheros"
              :key="i"
              class="column is-3 has-text-centered"
            >
              <div class="is-centered">
                <figure class="image is-128x128 has-image-centered">
                  <img :alt="ph.alt" class="is-rounded" v-lazy="ph.svg" />
                </figure>
                <p class="title">{{ ph.title }}</p>
                <p class="heading">
                  {{ ph.heading }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="section is-medium section-feature-grey"
        id="background_section"
      >
        <div class="container">
          <div class="content">
            <h1 class="is-medium has-text-left title" id="about-text">
              <em class="has-text-primary"># </em>About
            </h1>
            <h2 class="is-medium title">
              THE INSTANT CAMERA GUY
            </h2>
            <div class="columns">
              <div class="column is-centered">
                <datocms-image
                  :data="aboutImage"
                  :root-style="rootStyle"
                  class="is-square is-flex"
                  picture-class="is-centered"
                />
              </div>
              <div class="column is-three-quarters has-text-justified">
                <vue-markdown>{{ aboutText }}</vue-markdown>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section is-medium" id="repairs">
        <div class="container">
          <div class="content">
            <h1 class="is-medium has-text-left title" id="repair">
              <em class="has-text-primary"># </em>Repairs & Modification
            </h1>
          </div>
          <div class="columns is-centered">
            <div class="column has-text-centered is-10 is-centered">
              <p class="has-padding-10">{{ repairText }}</p>
              <RepairColumns />
            </div>
          </div>
          <div class="content is-pulled-right">
            <h1 class="has-text-orange">
              <g-link class="repair-link has-text-orange" to="/repair/"
                >More info...</g-link
              >
            </h1>
          </div>
        </div>
      </section>
      <section class="section is-medium" id="instaposts">
        <div class="container">
          <div class="content">
            <h1 class="is-medium has-text-left title" id="photos">
              <em class="has-text-primary"># </em>Photos
            </h1>
          </div>
          <instaposts />
        </div>
      </section>
      <section class="section is-large" id="coming-soon">
        <div class="container">
          <div class="content">
            <h1 class="title has-text-centered is-1" id="coming-soon-title">
              More to Come ...
            </h1>
            <h2
              class="subtitle has-text-centered has-text-weight-light is-3"
              id="coming-soon-subtitle"
            >
              Blog Posts, Previous Work and projects will be coming soon. Stay
              Tuned !
            </h2>
          </div>
        </div>
      </section>
      <footer-bar />
    </div>
  </Layout>
</template>

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
      }
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
    home {
      copyright
      heroimage {
        responsiveImage(imgixParams: { auto: format }) {
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
      repairPreface
    }
    aboutPage {
      bio
      photo {
        url
        responsiveImage(
          imgixParams: {
            fpY: 0.18
            mask: "ellipse"
            fit: crop
            ar: "200:200"
            h: 200
            w: 200
            auto: format
          }
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

<script>
import FooterBar from '~/components/FooterBar'
import Instaposts from '~/components/Instaposts'
import DroneDelivery from '~/assets/img/undraw_drone_delivery_5vrm.svg'
import Camera from '~/assets/img/undraw_camera_mg5h.svg'
import Photos from '~/assets/img/undraw_photos_1nui.svg'
import VueMarkdown from 'vue-markdown'

import dedent from 'dedent'
import RepairColumns from '../components/RepairColumns'

export default {
  components: {
    RepairColumns,
    FooterBar,
    VueMarkdown,
    Instaposts,
  },
  data: () => ({
    loading: 0,
    rootStyle: { height: 480 },
  }),
  computed: {
    metaInfo() {
      return {
        title: this.$page.site.seo.fallbackSeo.title,
        meta: [
          {
            key: 'description',
            name: 'description',
            content: this.$page.site.seo.fallbackSeo.description,
          },
        ],
      }
    },
    hero() {
      return {
        url: `https://www.datocms-assets.com/12178/1587301302-sx70.png${
          {
            sm: '?q=70&auto=format&w=400&h=400&fit=clip',
            md: '?q=80&auto=format&w=600&h=600&fit=clip',
            lg: '?q=90&auto=format&w=800&h=800&fit=clip',
          }[this.$mq]
        }`,
        backgroundPosition: `${
          this.$mq === 'sm' ? 'center 85%' : 'center 70%'
        }`,
      }
    },
    postheros() {
      return this.$page.allPostheros.map((item, i) => {
        return { ...item, ...this.getSVG(i) }
      })
    },
    heroBgColor() {
      return this.$page.home.heroimage.responsiveImage.bgColor || '#ff8200'
    },
    hrefPhone() {
      return this.$page.home.phoneNumber.startsWith('0')
        ? 'tel:+61' + this.$page.home.phoneNumber.replace(/^0/, '')
        : this.$page.home.phoneNumber
    },
    aboutText() {
      return dedent(this.$page.home.introText)
    },
    aboutImage() {
      return this.$page.aboutPage.photo.responsiveImage
    },
    repairText() {
      return dedent(this.$page.home.repairPreface)
    },
  },
  methods: {
    getSVG(i) {
      return [
        { svg: Photos, alt: 'Picture of Photographs' },
        { svg: Camera, alt: 'Picture of a Camera' },
        { svg: DroneDelivery, alt: 'Picture of a drone delivering goods' },
      ][i % 3]
    },
  },
}
</script>

<style lang="scss" scoped>
.repair-link {
  a {
    color: $polaroid_orange;
  }
}

#hero {
  background-color: $grey-darker;
  justify-content: center;
  align-items: center;
}

.hero-img {
  background-position: center / 35%;
}

@media screen and (max-width: 1024px - 1px) {
  .hero-img {
    background-position: 55% center;
  }
}

.hero-body {
  padding-top: 1rem;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

#title {
  letter-spacing: 1px;
  background: $header-text-gradient;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  color: $blue;
  font-family: Righteous, $family-heading;
  word-break: break-word;
  z-index: 6;
  font-size: 4rem;
}

@media screen and (max-width: 1024px - 1px) {
  #title {
    font-size: 3rem;
  }
}

#subtitle {
  background-image: $header-text-gradient;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  word-spacing: 5px;
  z-index: 6;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  font-family: Righteous, $family-heading;
  word-break: break-word;
}

.card,
.hero-body {
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

#hero-body {
  align-self: center;
  justify-self: center;
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
