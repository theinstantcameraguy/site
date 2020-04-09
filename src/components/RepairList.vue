<template>
  <b-carousel
    :indicator="indicator"
    :indicator-background="indicatorBackground"
    :indicator-inside="indicatorInside"
    :indicator-mode="indicatorMode"
    :indicator-position="indicatorPosition"
    :indicator-style="indicatorStyle"
    :icon-prev="iconPrev"
    :icon-next="iconNext"
    :interval=5000
    :pause-info="false"
  >
    <b-carousel-item v-for="(carousel, i) in carouselData" :key="i">
      <section id="repair-carousel" :class="`hero is-medium`">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-mobile is-centered has-text-centered">
              <div class="column is-three-quarters">
                <h1 class="title">{{carousel.title}}</h1>
                <p class="subtitle">
                  <vue-markdown>{{ carousel.subtitle }}
                  </vue-markdown>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </b-carousel-item>
  </b-carousel>
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
  }
</static-query>


<script>
  import VueMarkdown from 'vue-markdown'

  export default {
    name: 'RepairList',
    components: { VueMarkdown },
    data () {
      return {
        indicator: true,
        indicatorBackground: false,
        indicatorInside: false,
        indicatorMode: 'click',
        indicatorPosition: 'is-top',
        indicatorStyle: 'is-lines',
        iconPack: 'fas',
        iconNext: 'chevron-right',
        iconPrev: 'chevron-left',
        pauseText:''
      }
    },
    methods: {
      activeColor (index) {
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
    computed: {
      repairImage1 () {
        return (
          this.$static.repairPage.edges[0].node.example[0].photo.url +
          '?fp-x=.35&fp-y=.5&fp-z=1.5&mask=corners&w=480&h=480&fit=crop&w=300&h=300&maskbg=00b140&fill=solid&fill-color=00b140'
        )
      },
      repairImage2 () {
        return (
          this.$static.repairPage.edges[0].node.example[1].photo.url +
          '?fp-x=.65&fp-y=.5&fp-z=1.5&mask=corners&w=480&h=480&fit=crop&w=300&h=300&maskbg=00b140&fill=solid&fill-color=00b140'
        )
      },
      carouselData () {
        return this.$static.allService.edges.map((serviceNode, i) => {
          return {
            title: serviceNode.node.heading,
            subtitle: serviceNode.node.serviceItems[0].itemDescription,
            color: this.activeColor(i)
          }
        })
      }

    }
  }
</script>
<style lang="scss">

  .hero-body {
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
  .hero {
    justify-content: center;
    align-items: center;
  }
  $family-heading: 'Raleway', 'Lucida Grande', 'Lucida Sans Unicode',
  'Lucida Sans', Geneva, Arial, sans-serif;

  $family-serif: Georgia, Cambria, 'Times New Roman', Times, serif;

  $navbar-height: 5rem;

</style>
