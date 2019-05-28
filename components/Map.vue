<template>
  <MglMap :access-token="accessToken" :map-style="mapStyle">
    <MglMarker :coordinates="coordinates" color="blue" />
  </MglMap>
</template>

<script>
import Mapbox from 'mapbox-gl'
import { MglMap, MglMarker } from 'vue-mapbox'
export default {
  name: 'Map',
  components: {
    MglMap,
    MglMarker
  },
  props: { coordinates: { type: Array, default: () => [0, 0] } },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css'
        },
        {
          rel: 'stylesheet',
          href:
            'https://cdn.jsdelivr.net/npm/vue-mapbox@latest/dist/vue-mapbox.css'
        }
      ]
    }
  },
  data() {
    return {
      accessToken: process.env.MAPBOX_ACCESS_TOKEN, // your access token. Needed if you using Mapbox maps
      mapStyle: 'mapbox://styles/cjpoole/cjw7h3dla4q011csf7olah8px' // your map style
      // Atlantic Style mapbox://styles/cjpoole/cjw7h59on4puh1cmrry2ucipz
    }
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox
  }
}
</script>

<style scoped></style>
