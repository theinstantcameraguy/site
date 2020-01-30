<template>
  <nav class="navbar my-navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a
        @click="showNav = !showNav"
        :class="{ 'is-active': showNav }"
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
          data-menuanchor="about"
          class="navbar-item"
          href="#about"
          >About</a
        >
        <a
          id="repair-nav"
          data-menuanchor="repairs"
          class="navbar-item"
          href="#repairs"
          >Repairs</a
        >
        <span class="navbar-item force-center">
          <a :href="hrefPhone">
            <b-icon slot="marker" icon="phone" type="is-danger"></b-icon>
          </a>
        </span>
        <nuxt-link
          id="brand-nav"
          to="/"
          class="navbar-item has-text-weight-bold has-text-white force-center brand-nav"
        >
          The Instant 📷 Guy
        </nuxt-link>
        <span class="navbar-item force-center">
          <a href="mailto:jake@theinstantcameraguy.com">
            <b-icon slot="marker" icon="email" type="is-danger"></b-icon>
          </a>
        </span>
        <a
          id="photos-nav"
          data-menuanchor="photos"
          class="navbar-item"
          href="#instaposts"
          >Photos</a
        >
        <a
          id="contact-nav"
          data-menuanchor="contact"
          class="navbar-item"
          href="#contact"
          >Contact</a
        >
      </div>
    </div>
  </nav>
</template>
<script>
import home from '~/queries/fetchIndex'
export default {
  name: 'NavBar',
  data() {
    return { showNav: false }
  },
  computed: {
    hrefPhone() {
      return 'tel:+61431 845 455'
      // if (!this.home) {
      //   return ''
      // }
      // return this.home?.phoneNumber?.startsWith('0')
      //   ? 'tel:+61' + this.home?.phoneNumber.replace(/^0/, '')
      //   : this.home.phoneNumber | ''
    }
  },
  apollo: {
    // fetchPolicy: 'cache-and-network',
    home: {
      prefetch: true,
      query: home
    }
  }
}
</script>

<style lang="scss">
#about-nav {
  color: $eggplant;
}
#repair-nav {
  color: $gold;
}
#photos-nav {
  color: $fuschia;
}
#contact-nav {
  color: $cyan;
}
.brand-nav {
  font-family: Righteous, $family-heading;
}
@media screen and (min-width: 1088px) {
  .my-navbar {
    display: block !important;
  }
  .my-navbar .navbar-brand {
    display: none;
  }
  #my-navbar-menu {
    width: 37.5rem;
    margin: 0 auto;
    padding-top: 1.25em;
  }
  #my-navbar-menu > div {
    flex: 1;
  }
  #my-navbar-menu > div > div {
    flex: 1;
    justify-content: center;
    align-content: center;
  }
}
</style>
