<template>
  <div class="columns is-multiline">
    <div v-for="post in $static.posts.edges" :key="post.id" class="column">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img :src="post.node.images.standard_resolution.url" alt="Image"/>
          </figure>
        </div>
        <!--        <div class="content">-->
        <!--          {{ post.caption.text }}-->
        <!--        </div>-->
      </div>
    </div>
  </div>
</template>

<static-query>
  query {
  posts: allInstagramPost {
  edges {
  node {
  id
  user {
  profile_picture
  username
  }
  images {
  standard_resolution {
  url
  height
  width
  }
  }
  caption {
  text
  }
  comments {
  count
  }
  tags
  likes {
  count
  }
  }
  }
  }
  }
</static-query>

<script>
  // import { mapMutations } from 'vuex'
  import axios from "axios";

  export default {
    name: 'Instaposts',
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
