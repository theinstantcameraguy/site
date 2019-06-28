<template>
  <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
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
      <div class="navbar-end">
        <a data-menuanchor="about" class="navbar-item" href="#about">About</a>
        <!--        <nuxt-link to="/repairs" class="navbar-item">Repairs</nuxt-link>-->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
