<template>
  <footer id="footer" class="footer">
    <div class="container footer-cont is-flex">
      <div class="left">
        <div class="item">
          <div>
            <p class="is-size-3 has-text-centered">
              Contact
            </p>
            <div class="content is-flex footer-item">
              <a href="hrefPhone">
                <b-icon slot="marker" icon="phone" type="is-danger"></b-icon>
                {{ home.phoneNumber }}
              </a>
              <p>
                <a href="mailto:theinstantcameraguy@hotmail.com">
                  <b-icon slot="marker" icon="email" type="is-danger"></b-icon>
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
          <div>
            <p class="is-size-3 has-text-centered">
              Socials
            </p>
            <div class="content is-flex footer-item-row">
              <a href="https://www.facebook.com/instantcameraguy/">
                <b-icon slot="marker" icon="facebook" type="is-info"> </b-icon
              ></a>
              <a
                href="https://www.youtube.com/playlist?list=PLwtSwDOf9bZr7eI1SN6eN2rorTG-W8pV8"
                ><b-icon slot="marker" icon="youtube" type="is-info"></b-icon>
              </a>
              <a href="https://www.instagram.com/theinstantcameraguy/?hl=en"
                ><b-icon slot="marker" icon="instagram" type="is-info"></b-icon
              ></a>
              <a
                href="http://www.gumtree.com.au/s-seller/Instant%20Camera%20Guy/56661163"
                ><b-icon slot="marker" icon="tree" type="is-info"></b-icon
              ></a>
              <a href="https://m.me/instantcameraguy">
                <b-icon slot="marker" icon="facebook-messenger" type="is-info">
                </b-icon
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import home from '~/queries/fetchIndex'
export default {
  name: 'FooterBar',
  apollo: {
    $loadingKey: 'loading',
    // fetchPolicy: 'cache-and-network',
    home: {
      prefetch: true,
      query: home
    }
  },
  computed: {
    hrefPhone() {
      return this.home.phoneNumber.startsWith('0')
        ? 'tel:+61' + this.home.phoneNumber.replace(/^0/, '')
        : this.home.phoneNumber
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
#footer {
  color: $polaroid_red;
}
</style>
