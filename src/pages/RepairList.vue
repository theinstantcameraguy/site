<template>
  <div class="tile is-ancestor is-vertical">

    <template v-for="(serviceRow,index) in serviceEdges">
      <div class="tile is-parent">

        <article class="tile is-vertical" v-for="service in serviceRow">
          <p
            class="title"
          >
            {{ service.node.heading }}
          </p>
          <p
            v-for="serviceItem in service.node.serviceItems"
            :key="serviceItem.id"
            class="subtitle"
          >
            <vue-markdown>{{
              serviceItem.itemDescription
              }}
            </vue-markdown>
          </p>

        </article>
        <div v-if="index === 0" class="tile is-vertical">
          <figure class="image">
            <g-image :src="repairImage1"/>
          </figure>
        </div>
        <div v-if="index === 1" class="tile is-vertical">
          <figure class="image">
            <g-image :src="repairImage2"/>
          </figure>
        </div>
      </div>
    </template>
  </div>
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
    computed: {
      repairImage1() {
        return (
          this.$static.repairPage.edges[0].node.example[0].photo.url +
          '?fp-x=.35&fp-y=.5&fp-z=1.5&mask=corners&w=480&h=480&fit=crop&w=300&h=300&maskbg=00b140&fill=solid&fill-color=00b140'
        )
      },
      repairImage2() {
        return (
          this.$static.repairPage.edges[0].node.example[1].photo.url +
          '?fp-x=.65&fp-y=.5&fp-z=1.5&mask=corners&w=480&h=480&fit=crop&w=300&h=300&maskbg=00b140&fill=solid&fill-color=00b140'
        )
      },
      serviceEdges() {
        const row_split = []
        for (let i = 0; i <= this.$static.allService.edges.length; i += 3) {
          row_split.push(this.$static.allService.edges.slice(i, i + 3))
        }
        return row_split
      }

    }
  }
</script>
<style lang="scss">

  $family-heading: 'Raleway', 'Lucida Grande', 'Lucida Sans Unicode',
  'Lucida Sans', Geneva, Arial, sans-serif;

  $family-serif: Georgia, Cambria, 'Times New Roman', Times, serif;

  $navbar-height: 5rem;

</style>
