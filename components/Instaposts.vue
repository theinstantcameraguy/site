<template>
  <div class="columns is-multiline is-mobile">
    <div
      v-for="post in feeds"
      :key="post.id"
      class="column is-4-desktop is-6-tablet is-6-mobile"
    >
      <div class="card">
        <div class="card-image">
          <figure class="image is-square">
            <img :src="post.images.standard_resolution.url" alt="Image" />
          </figure>
        </div>

        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image" style="height: 40px; width: 40px;">
                <img :src="post.user.profile_picture" alt="Image" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ post.user.full_name }}</p>
              <p class="subtitle is-6">@ {{ post.user.username }}</p>
            </div>
          </div>

          <div class="content" style="height: 100px; overflow: auto;">
            {{ post.caption.text }}
          </div>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <b-icon pack="fas" icon="heart" type="is-danger"></b-icon>
            &nbsp; {{ post.likes.count }}
          </p>
          <p class="card-footer-item">
            <b-icon pack="fas" icon="comments" type="is-primary"></b-icon>
            &nbsp; {{ post.comments.count }}
          </p>
          <a :href="post.link" target="_blank" class="card-footer-item">
            <b-icon pack="fas" icon="link" type="is-info"> </b-icon>
            &nbsp; Link</a
          >
        </footer>
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
    this.$store.dispatch('getUserFeed', 6)
  }
}
</script>

<style scoped></style>
