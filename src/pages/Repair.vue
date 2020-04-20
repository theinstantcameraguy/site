<template>
  <NILayout>
    <section class="section">
      <div class="container">
        <div class="content">
          <h1 class="title has-text-centered">Repairs</h1>

          <!--        <datocms-image-->
          <!--          :data="this.$page.repairPage.example[0].photo.responsiveImage"-->
          <!--          class="image is-1by2 is-flex"-->
          <!--          picture-class="is-centered"-->
          <!--        ></datocms-image>-->
          <vue-markdown>{{ this.$page.repairPage.description }}</vue-markdown>
        </div>
      </div>
    </section>
    <FooterBar />
  </NILayout>
</template>

<page-query>
  query {
    repairPage {
      description(markdown: true)
      example {
        photo {
          responsiveImage(
            imgixParams: { fit: clip, h: 300, w: 200, auto: format }
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
      }
    }
  }
</page-query>
<script>
import VueMarkdown from 'vue-markdown'
import FooterBar from '../components/FooterBar'

export default {
  name: 'Repair',
  metaInfo: {
    title: 'Repairs',
  },
  components: {
    FooterBar,
    VueMarkdown,
  },
}
</script>

<style scoped></style>
