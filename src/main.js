import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import "leaflet/dist/leaflet.css"
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Leaflet image fix https://github.com/KoRiGaN/Vue2Leaflet/issues/96#issuecomment-341453050
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
// End leaflet image fix

Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  render: h => h(App)
}).$mount('#app')
