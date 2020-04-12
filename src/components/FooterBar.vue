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
                  <b-icon icon="phone" slot="marker" type="is-danger"></b-icon>
                  {{ $static.home.edges[0].node.phoneNumber }}
                </a>
                <p>
                  <a href="mailto:theinstantcameraguy@hotmail.com">
                    <b-icon
                      icon="envelope"
                      slot="marker"
                      type="is-danger"
                    ></b-icon>
                    theinstantcameraguy@hotmail.com</a
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
              <div class="columns">
                <div class="column is-size-6 is-centered has-text-centered">
                  <div>
                    <a href="https://www.facebook.com/instantcameraguy/">
                      <span>
                        <b-icon
                          icon="facebook"
                          pack="fab"
                          slot="marker"
                          type="is-info"
                        >
                        </b-icon>
                        Facebook</span
                      >
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.youtube.com/playlist?list=PLwtSwDOf9bZr7eI1SN6eN2rorTG-W8pV8"
                      ><span>
                        <b-icon
                          icon="youtube"
                          pack="fab"
                          slot="marker"
                          type="is-info"
                        ></b-icon>
                        Youtube
                      </span>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.instagram.com/theinstantcameraguy/?hl=en"
                      ><span>
                        <b-icon
                          icon="instagram"
                          pack="fab"
                          slot="marker"
                          type="is-info"
                        ></b-icon
                        >Instagram</span
                      ></a
                    >
                  </div>
                  <div>
                    <a
                      href="http://www.gumtree.com.au/s-seller/Instant%20Camera%20Guy/56661163"
                      ><span>
                        <b-icon
                          icon="tree"
                          slot="marker"
                          type="is-info"
                        ></b-icon>
                        Gumtree
                      </span>
                    </a>
                  </div>
                  <div>
                    <a href="https://m.me/instantcameraguy">
                      <span
                        ><b-icon
                          icon="facebook-messenger"
                          pack="fab"
                          slot="marker"
                          type="is-info"
                        >
                        </b-icon
                        >Messenger
                      </span>
                    </a>
                  </div>
                </div>
              </div>
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
export default {
  name: 'FooterBar',
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

<style lang="scss" scoped></style>

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
        }
      }
    }
  }
</static-query>
