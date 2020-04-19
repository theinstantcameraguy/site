<template>
  <div
    class="columns is-multiline is-6 is-3-mobile is-centered has-text-centered has-padding-10"
  >
    <div
      class="column is-one-third"
      v-for="(carousel, i) in carouselData"
      :key="carousel.id"
    >
      <b-icon
        class="fa-3x"
        :icon="carousel.icon"
        :pack="carousel.pack"
        type="is-orange"
        size="is-large"
        custom-class="serviceIcons"
      ></b-icon>
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
