<template>
  <h2 v-if="loading > 0">
    Loading...
  </h2>
  <div
    v-else
    id="hero"
    class="hero hero is-cover is-relative is-fullheight is-default is-bold"
    :style="{ backgroundImage: `url(${home.heroimage.url})` }"
  >
    <div class="navbar-placeholder">
      <nav
        class="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="container">
          <div id="navbar-repairs" class="navbar-menu">
            <div
              class="navbar-start"
              style="flex-grow: 1; justify-content: center;"
            >
              <a data-menuanchor="repairs" class="navbar-item" href="#repairs"
                >Repairs</a
              >
              <!--        <nuxt-link to="/repairs" class="navbar-item">Repairs</nuxt-link>-->
            </div>
          </div>
          <div class="navbar-brand">
            <nuxt-link to="/" class="navbar-item has-text-weight-bold">
              The Instant 📷 Guy
            </nuxt-link>

            <a
              role="button"
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbar" class="navbar-menu">
            <div
              class="navbar-end"
              style="flex-grow: 1; justify-content: center;"
            >
              <a data-menuanchor="about" class="navbar-item" href="#about"
                >About</a
              >
            </div>
          </div>
        </div>
      </nav>
      <div class="container">
        <h1 id="title" class="title has-text-centered has-text-weight-medium">
          {{ home.title }}
        </h1>
        <h2 id="subtitle" class="subtitle has-text-centered">
          {{ home.subtitle }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import home from '~/queries/fetchIndex'
export default {
  name: 'NavBar',
  data: () => ({
    loading: 0
  }),
  apollo: {
    $loadingKey: 'loading',
    home: {
      query: home
    }
  }
}
</script>

<style scoped lang="scss">
.navbar {
  &.is-transparent {
    background-color: transparent;
    background-image: none;
  }
}
</style>
