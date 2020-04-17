<template>
  <client-only>
    <b-carousel
      :indicator="indicator"
      :indicator-background="indicatorBackground"
      :indicator-inside="indicatorInside"
      :indicator-mode="indicatorMode"
      :indicator-position="indicatorPosition"
      :indicator-style="indicatorStyle"
      :autoplay="autoPlay"
      :pause-hover="pauseHover"
      :pause-info="pauseInfo"
      :icon-prev="iconPrev"
      :icon-next="iconNext"
      :interval="5000"
    >
      <b-carousel-item v-for="(carousel, i) in carouselData" :key="carousel.id">
        <section :class="`hero is-medium repair-carousel`">
          <div class="hero-body">
            <div class="container">
              <div class="columns is-mobile is-centered has-text-centered">
                <div class="column is-three-quarters">
                  <h1 class="title carousel-tile">{{ carousel.title }}</h1>
                  <p class="subtitle">
                    <vue-markdown>{{ carousel.subtitle }} </vue-markdown>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
  </client-only>
</template>

<static-query>
  query {
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
    allServices {
      heading
      serviceItems {
        id
        itemDescription
      }
    }
  }
</static-query>

<script>
import VueMarkdown from 'vue-markdown'
import { join } from 'lodash'

export default {
  name: 'RepairList',
  components: { VueMarkdown },
  data() {
    return {
      indicator: true,
      indicatorBackground: false,
      indicatorInside: false,
      indicatorMode: 'click',
      indicatorPosition: 'is-top',
      indicatorStyle: 'is-lines',
      autoPlay: true,
      pauseHover: true,
      pauseInfo: false,
      iconPack: 'fas',
      iconNext: 'chevron-right',
      iconPrev: 'chevron-left',
    }
  },
  computed: {
    carouselData() {
      return this.$static.allServices.map((serviceNode, i) => {
        return {
          title: serviceNode.heading,
          subtitle: join(
            serviceNode.serviceItems.map((item) => item.itemDescription),
            '\n'
          ),
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.carousel-title {
  word-break: normal !important;
}
</style>
