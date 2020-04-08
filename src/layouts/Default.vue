<template>
  <div class="layout">
    <header class="header">
      <nav
        class="navbar is-transparent is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a
            class="navbar-item force-center brand-nav mobile-brand is-size-4 has-text-centered"
          >
            The Instant 📷 Guy
          </a>
          <a
            @click="showNav = !showNav"
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="my-navbar-menu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="my-navbar-menu"
          :class="{ 'is-active': showNav }"
          class="navbar-menu"
        >
          <div class="navbar-start">
            <a
              id="about-nav"
              class="has-text-weight-bold navbar-item"
              data-menuanchor="about"
              href="#about"
            >About</a
            >
            <a
              id="repair-nav"
              class="has-text-weight-bold navbar-item"
              data-menuanchor="repairs"
              href="#repairs"
            >Repairs</a
            >
            <a
              id="logo"
              class="has-text-weight-bold has-text-white navbar-item force-center brand-nav is-size-4 has-text-centered"
            >
              The Instant 📷 Guy
            </a>
            <a
              id="photos-nav"
              class="has-text-weight-bold navbar-item"
              data-menuanchor="photos"
              href="#instaposts"
            >Photos</a
            >
            <a
              id="contact-nav"
              class="has-text-weight-bold navbar-item"
              data-menuanchor="contact"
              href="#footer"
            >Contact</a
            >
          </div>
        </div>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<script>
  export default {
    data() {
      return { showNav: false }
    },
  }
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

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
  $header-text-gradient-atlantic: linear-gradient($fuschia 30%, $gold 45%, $cyan 60%, $eggplant 75%);
  $header-text-gradient: linear-gradient(to right, $polaroid_blue 20%, $polaroid_green 38%, $polaroid_gold 46%,
    $polaroid_orange 54%,$polaroid_red 62%, $polaroid_pink 80% );
  html {
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
  body,
  p,
  .content {
    font-family: 'Raleway', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans',
    Geneva, Arial, sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7,
  .title,
  .subtitle {
    font-family: 'Righteous', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
  body {
    background: $blanc-brown;
  }
  .hero {
    background: no-repeat $grey-dark center/35% url('~@/assets/polaroid600.png');
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 1024px - 1px) {
    .hero {
      background: no-repeat $grey-dark center/80% url('~@/assets/polaroid600.png');
    }
  }
  .card,
  #repairs-accord {
    background-color: $blanc-brown;
  }
  .hero-body {
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
  #title {
    letter-spacing: 1px;
    font-size: 5rem !important;
    background: $header-text-gradient;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    font-family: Righteous, $family-heading;
  }

  #hero-body {
    align-self: center;
    justify-self: center;
  }
  #subtitle {
    background-image: $header-text-gradient;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    word-spacing: 5px;
    font-size: 4rem !important;
    z-index: 6;
    stroke-width: 0.5px;
    -webkit-text-stroke-color: $black;
    -webkit-text-stroke-width: 0.5px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    font-family: Righteous, $family-heading;
  }

  #map {
    height: 260px;
  }
  #about-text {
    color: $polaroid_blue;
  }
  #repair {
    color: $polaroid_green;
  }
  #photos {
    color: $polaroid_red;
  }
  #about-nav {
    color: $polaroid_blue;
  }
  #repair-nav {
    color: $polaroid_green;
  }
  #photos-nav {
    color: $polaroid_gold;
  }
  #contact-nav {
    color: $polaroid_red;
  }
  .brand-nav {
    font-family: Righteous, $family-heading;
  }

  .navbar-start {
    flex-grow: 1 !important;
    justify-content: center !important;
    text-align: center !important;
  }

  @media screen and (max-width: 1024px - 1px) {
    #logo {
      display: none !important;
    }
    .force-center {
      position: absolute !important;
      left: 50% !important;
      transform: translateX(-50%) !important;
    }
    .navbar-end {
      display: flex !important;
      justify-content: center !important;
    }
  }

  @media screen and (min-width: 1024px) {
    .navbar-brand {
      display: none !important;
    }
  }
  #post-content {
    justify-content: space-between;
    align-content: center;
    flex-flow: row wrap;
    align-self: center;
  }
  .has-image-centered {
    margin-left: auto;
    margin-right: auto;
  }
  $family-heading: 'Raleway', 'Lucida Grande', 'Lucida Sans Unicode',
  'Lucida Sans', Geneva, Arial, sans-serif;

  $family-serif: Georgia, Cambria, 'Times New Roman', Times, serif;

  $navbar-height: 5rem;


</style>
