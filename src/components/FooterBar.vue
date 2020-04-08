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
                {{ $static.home.edges[0].node.phoneNumber }}
              </a>
              <p>
                <a href="mailto:theinstantcameraguy@hotmail.com">
                  <b-icon slot="marker" icon="envelope" type="is-danger"></b-icon>
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
                <b-icon slot="marker" icon="facebook" pack="fab" type="is-info"> </b-icon
              ></a>
              <a
                href="https://www.youtube.com/playlist?list=PLwtSwDOf9bZr7eI1SN6eN2rorTG-W8pV8"
                ><b-icon slot="marker" icon="youtube" pack="fab" type="is-info"></b-icon>
              </a>
              <a href="https://www.instagram.com/theinstantcameraguy/?hl=en"
                ><b-icon slot="marker" icon="instagram"  pack="fab" type="is-info"></b-icon
              ></a>
              <a
                href="http://www.gumtree.com.au/s-seller/Instant%20Camera%20Guy/56661163"
                ><b-icon slot="marker" icon="tree" type="is-info"></b-icon
              ></a>
              <a href="https://m.me/instantcameraguy">
                <b-icon slot="marker" icon="facebook-messenger" pack="fab" type="is-info">
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
export default {
  name: 'FooterBar',
  computed: {
    hrefPhone() {
      return this.$static.home.edges[0].node.phoneNumber.startsWith('0')
        ? 'tel:+61' + this.$static.home.edges[0].node.phoneNumber.replace(/^0/, '')
        : this.$static.home.edges[0].node.phoneNumber
    }
  }
}
</script>

<style lang="scss">
  $grey-darker:  #363636;
  $grey-dark:    #373a3c;
  $grey:         #55595c;
  $grey-light:   #818a91;
  $grey-lighter: #d9dee2;

  $black:        hsl(0, 0%, 4%) !default
  $black-bis:    hsl(0, 0%, 7%) !default
  $black-ter:    hsl(0, 0%, 14%) !default

  $grey-darker:  hsl(0, 0%, 21%) !default
  $grey-dark:    hsl(0, 0%, 29%) !default
  $grey:         hsl(0, 0%, 48%) !default
  $grey-light:   hsl(0, 0%, 71%) !default
  $grey-lighter: hsl(0, 0%, 86%) !default

  $white-ter:    hsl(0, 0%, 96%) !default
  $white-bis:    hsl(0, 0%, 98%) !default
  $white:        hsl(0, 0%, 100%) !default

  $turquoise:    hsl(171, 100%, 41%) !default
  $cyan:         hsl(204, 86%,  53%) !default


  $yellow:       #ffd500;
  $green:        #02B875;
  $blue:         #45b2d3;
  $red:          #d9534f;
  $tan: #dccdbf;
  $tan2: hsl(37, 25%,  74%) !default;


  $link: #4582EC ;
  $danger: $green;
  $primary: $red;


  $family-heading: "Raleway", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif;

  $family-serif: Georgia, Cambria, "Times New Roman", Times, serif;

  $navbar-height: 5rem;

  $bulmaswatch-import-font: true !default;




  $apple: $tan2 !default
  $apple-invert: findColorInvert($apple) !default

  $fuschia: #CC3D7A;
  $fuschia-invert: findColorInvert($fuschia);

  $gold : #cca33d;
  $gold-invert: findColorInvert($gold);
  $cyan : #00b8e6;
  $cyan-invert: findColorInvert($cyan);
  $beige : #F0B67F;
  $beige-invert: findColorInvert($beige);

  $cape-cod-grey: #484d4b;
  $blanc-brown: #d4ccb9;
  $silver-chalice-grey: #b0b0ab;
  $bison-hide-grey: #b1a48e;
  $eggplant: #862754;
  $eggplant-invert: findColorInvert($eggplant);
  $blue: #3D81DA;
  $apple-red: #9F1E17;
  $burnt-orange: #F4581F;
  $polaroid_blue : #37a3e0;
  $polaroid_green : #00b140;
  $polaroid_gold : #ffb500;
  $polaroid_orange : #ff8200;
  $polaroid_red : #da291c;
  $polaroid_pink : #f00095;
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
