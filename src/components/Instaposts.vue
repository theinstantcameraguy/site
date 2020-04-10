<template>
  <div class="columns is-multiline" >
    <div v-for="post in images" :key="post.id" class="column">
      <div class="card">
        <div class="card-image" >
          <figure class="image">
            <img v-lazy="post.imageObj" :alt="post.alt"
                 />
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
  export default {
    name: 'Instaposts',
    computed:{
      images(){
        return  this.$static.posts.edges.map(post => {
          return {
            id: post.id,
            imageObj: {
              src: post.node.images.standard_resolution.url,
              loading: '760.gif',
            },
            alt: post.node.caption.text
          }
        })
      }
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
