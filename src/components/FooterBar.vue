<template>
  <div>
    <footer class="footer" id="footer">
      <div class="container is-centered align-items-center-mobile align-center">
        <div class="columns">
          <div class="column">
            <p class="is-size-3 has-text-centered">
              Contact
            </p>
            <div class="columns has-text-centered">
              <div class="column">
                <a href="hrefPhone">
                  <b-icon icon="phone" slot="marker" type="is-orange"></b-icon>
                  {{ $static.home.edges[0].node.phoneNumber }}
                </a>
                <p>
                  <a href="mailto:theinstantcameraguy@hotmail.com">
                    <b-icon
                      icon="envelope"
                      slot="marker"
                      type="is-orange"
                    ></b-icon>
                    theinstantcameraguy@hotmail.com</a
                  >
                </p>
                <p>
                  <a href="https://m.me/instantcameraguy">
                    <b-icon
                      icon="facebook-messenger"
                      pack="fab"
                      slot="marker"
                      type="is-orange"
                    ></b-icon>
                    Facebook messenger</a
                  >
                </p>
                <p>
                  <a
                    href="http://www.gumtree.com.au/s-seller/Instant%20Camera%20Guy/56661163"
                  >
                    <GumTree class="is-orange icon" />
                    Visit My Store on Gumtree</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div
            class="column is-centered align-items-center-mobile social-links"
          >
            <div class="social-links">
              <p class="is-size-4 has-text-centered">
                Socials
              </p>
              <h2 class="subtitle is-size-3 has-text-centered">
                <a
                  v-for="social in this.$static.allSocial.edges"
                  :href="social.node.url"
                >
                  <b-icon
                    :icon="social.node.icon"
                    :pack="social.node.pack"
                    slot="marker"
                    type="is-eggplant"
                    class="social-icon"
                    >{{ social.node.profileType }}</b-icon
                  >
                </a>
              </h2>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="level">
              <div class="level-item has-text-centered">
                <a
                  href="http://www.abr.business.gov.au/SearchByAbn.aspx?abn=93161449237"
                >
                  <p>ABN: 93 161 449 237</p></a
                >
              </div>
              <div class="level-item has-text-centered">
                <p>
                  {{ $static.home.edges[0].node.copyright }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import GumTree from '~/assets/img/gumtree.svg?inline'
export default {
  name: 'FooterBar',
  components: {
    GumTree,
  },
  computed: {
    hrefPhone() {
      return this.$static.home.edges[0].node.phoneNumber.startsWith('0')
        ? 'tel:+61' +
            this.$static.home.edges[0].node.phoneNumber.replace(/^0/, '')
        : this.$static.home.edges[0].node.phoneNumber
    },
  },
}
</script>

<style lang="scss" scoped>
.social-icon {
  margin: 0.25em;
}
</style>

<static-query>
  query {
    home: allDatoCmsHomePage {
      edges {
        node {
          copyright
          heroimage {
            url
          }
          introText
          pagelocation {
            latitude
            longitude
          }
          seoSettings {
            description
            title
          }
          subtitle
          title
          phoneNumber
        }
      }
    }
    allSocial: allDatoCmsSocialProfile {
      edges {
        node {
          position
          profileType
          icon
          url
          pack
          ordering
        }
      }
    }
  }
</static-query>
