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
    <slot />
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

<style lang="scss" scoped>
@import 'src/assets/scss/main';
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
