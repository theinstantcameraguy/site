<template>
  <div
    class="columns is-multiline is-11 is-3-mobile is-centered has-text-centered has-padding-11"
  >
    <div
      class="column is-one-third"
      v-for="(carousel, i) in carouselData"
      :key="carousel.id"
    >
      <vue-fontawesome
        class="fa-3x is-orange has-padding-5"
        :icon="carousel.icon"
        :pack="carousel.pack"
        size="is-large"
        :style="{ color: '#ff8200' }"
      ></vue-fontawesome>
      <h3 class="title is-size-5 has-text-weight-semi-bold">
        {{ carousel.title }}
      </h3>
      <p class="subtitle is-size-6">
        {{ carousel.subtitle }}
      </p>
    </div>
  </div>
</template>

<static-query>
  query {
    allServices {
      heading
      serviceItems {
        id
        itemDescription
      }
      icon
      pack
    }
  }
</static-query>

<style lang="scss" scoped>
$icon-svg-width: 3rem;
$icon-svg-height: 3rem;
.icon {
  svg {
    height: 3rem !important;
    width: 3rem !important;
  }
}
</style>
<script>
export default {
  name: 'RepairColumns',
  computed: {
    carouselData() {
      return this.$static.allServices.map((serviceNode, i) => {
        return {
          title: serviceNode.heading,
          subtitle: serviceNode.serviceItems[0].itemDescription,
          icon: serviceNode.icon,
          pack: serviceNode.pack,
        }
      })
    },
  },
}
</script>
