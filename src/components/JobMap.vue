<template>
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <v-marker-cluster>
      <l-marker
        v-for="marker in jobs"
        :key="marker.guid"
        :lat-lng="marker.geometry.coordinates.slice().reverse()"></l-marker>
      </v-marker-cluster>
    </l-map>
</template>

<script>

import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import Vue2LeafletMarkercluster from 'vue2-leaflet-markercluster'

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    'v-marker-cluster': Vue2LeafletMarkercluster
  },
  props: {
    jobs: {
      type: Array,
      required: false
    }
  },
  data () {
    return {
      zoom: 4,
      center: L.latLng(41.032309, -95.850958),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }
  }
}

</script>

<style>
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
</style>
