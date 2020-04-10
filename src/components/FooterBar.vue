<template>
  <footer class="footer" id="footer">
    <div class="container footer-cont is-flex">
      <div class="left">
        <div class="item">
          <div>
            <p class="is-size-3 has-text-centered">
              Contact
            </p>
            <div class="content is-flex footer-item">
              <a href="hrefPhone">
                <b-icon icon="phone" slot="marker" type="is-danger"></b-icon>
                {{ $static.home.edges[0].node.phoneNumber }}
              </a>
              <p>
                <a href="mailto:theinstantcameraguy@hotmail.com">
                  <b-icon icon="envelope" slot="marker" type="is-danger"></b-icon>
                  theinstantcameraguy@hotmail.com</a
                >
              </p>
              <a
                href="http://www.abr.business.gov.au/SearchByAbn.aspx?abn=93161449237"
              >
                ABN: 93 161 449 237</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="item">
          <div class="social-links">
            <p class="is-size-4 has-text-centered">
              Socials
            </p>
            <div class="columns">
              <div class="content is-flex footer-item-row is-size-6 is-centered">
                <div class="column is-centered">
                  <div>
                    <a href="https://www.facebook.com/instantcameraguy/">
                   <span> <b-icon icon="facebook" pack="fab" slot="marker" type="is-info"> </b-icon>
                    Facebook</span>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.youtube.com/playlist?list=PLwtSwDOf9bZr7eI1SN6eN2rorTG-W8pV8"
                    ><span>
                    <b-icon icon="youtube" pack="fab" slot="marker" type="is-info"></b-icon>
                     Youtube
                  </span>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/theinstantcameraguy/?hl=en"
                    ><span>
                    <b-icon icon="instagram" pack="fab" slot="marker" type="is-info"></b-icon
                    >Instagram</span></a>
                  </div>
                  <div>
                    <a
                      href="http://www.gumtree.com.au/s-seller/Instant%20Camera%20Guy/56661163"
                    ><span>
                  <b-icon icon="tree" slot="marker" type="is-info"></b-icon>
                  Gumtree
                </span>
                    </a>
                  </div>
                  <div>
                    <a href="https://m.me/instantcameraguy">
                      <span><b-icon icon="facebook-messenger" pack="fab" slot="marker" type="is-info">
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
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'FooterBar',
    computed: {
      hrefPhone () {
        return this.$static.home.edges[0].node.phoneNumber.startsWith('0')
          ? 'tel:+61' + this.$static.home.edges[0].node.phoneNumber.replace(/^0/, '')
          : this.$static.home.edges[0].node.phoneNumber
      }
    }
  }
</script>

<style lang="scss">

  .footer-cont {
    justify-content: space-between;
    align-content: center;
    flex-flow: row wrap;
    align-self: center;
  }

  .footer-item {
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }

  @media all and (max-width: 768px) {
    .footer-cont {
      /* On small screens, we are no longer using row direction but column */
      flex-direction: column;
      align-content: center;
      justify-content: center;
    }

    .footer-item-row {
      flex-direction: row;
      align-content: center;
      justify-content: space-between;
    }
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
  }
</static-query>
