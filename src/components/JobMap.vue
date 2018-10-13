<template>
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <v-marker-cluster>
      <l-marker
        v-for="marker in jobs"
        :key="marker.guid"
        :lat-lng="reverseCoordinates(marker.geometry.coordinates)">
        <l-popup
          :content="tooltip(marker.properties)"
        />
      </l-marker>
      </v-marker-cluster>
    </l-map>
</template>

<script>

import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'
import Vue2LeafletMarkercluster from 'vue2-leaflet-markercluster'

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
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
  },
  methods: {
    tooltip: function(properties) {
      var popupContent = "";
      if (properties) {
        popupContent += "<a href='" + properties.link + "' target='_blank'>" + properties.title + " " + properties.remote + "</a><br>";
        popupContent += "<strong>Company: </strong>" + properties.company + "<br>";
        if (properties.location !== ""){
          popupContent += "<strong>Location: </strong>" + properties.location + "<br>";
        } else {
          popupContent += "<strong>Location: </strong>No office location listed<br>";
        }

        popupContent += "<strong>Tags: </strong>"+ properties.category.join(", ") + "<br>";
      }
      return popupContent;
    },
    reverseCoordinates: function(data) {
      return data.slice().reverse();
    }
  }
}

</script>

<style>
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
</style>
