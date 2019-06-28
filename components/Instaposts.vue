<template>
  <div class="columns is-multiline">
    <div v-for="post in feeds" :key="post.id" class="column">
      <!--      Todo Replace with buefy cards and improve layout-->
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img :src="post.images.standard_resolution.url" alt="Image" />
          </figure>
        </div>
        <!--        <div class="content">-->
        <!--          {{ post.caption.text }}-->
        <!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
export default {
  name: 'Instaposts',
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css'
        }
      ]
    }
  },
  data() {
    return {
      accessToken: process.env.INSTATOKEN // your access token.
    }
  },
  computed: {
    feeds() {
      return this.$store.getters.feeds
    }
  },
  beforeMount() {
    this.$store.dispatch('getUserFeed', 9, 'image')
  }
}
</script>

<style scoped lang="scss">
$card-shadow: 0 !important;
.card {
  min-height: 160px;
  min-width: 160px;
  display: flex;
  flex-direction: column;
}
.column .card-footer {
  margin-top: auto;
}
</style>
