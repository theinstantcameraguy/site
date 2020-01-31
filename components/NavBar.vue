<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
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
        <a class="has-text-weight-bold has-text-white nav-item force-center">
          The Instant 📷 Guy
        </a>
        <a
          id="photos-nav"
          class="has-text-weight-bold nav-item"
          data-menuanchor="photos"
          href="#instaposts"
          >Photos</a
        >
        <a
          id="contact-nav"
          class="has-text-weight-bold nav-item"
          data-menuanchor="contact"
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
.navbar-start {
  flex-grow: 1;
  justify-content: center;
  text-align: center;
}

@media screen and (max-width: $desktop - 1px) {
  #logo {
    display: none;
  }
  .force-center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .navbar-end {
    display: flex;
    justify-content: center;
  }
}

@media screen and (min-width: $desktop) {
  .navbar-brand {
    display: none;
  }
}
</style>
