<template>
  <div id="app">
    <v-app id="vue-map">
      <v-navigation-drawer
        v-model="drawer"
        fixed
        width="400"
        app
      >
        <JobList
          :jobs="jobs"
        />
      </v-navigation-drawer>
      <v-toolbar dense dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Search Stack Overflow Jobs</v-toolbar-title>
        <v-dialog v-model="dialog" max-width="500px">
          <v-btn slot="activator" color="primary" dark>New Search</v-btn>
          <v-card>
            <v-card-title>
              <span class="headline">Search</span>
            </v-card-title>
            <v-container grid-list-md>
              <JobSearchForm
                v-model="search"
                placeholder="Search"
                @submit="submitForm"
              />
            </v-container>
          </v-card>
        </v-dialog>
      </v-toolbar>
      <v-content>
        <JobMap
          :jobs="jobs"
        />
      </v-content>
    </v-app>
  </div>
</template>

<script>
import JobList from './components/JobList.vue'
import JobSearchForm from './components/JobSearchForm.vue'
import JobMap from './components/JobMap.vue'

const axios = require('axios')
const apiBaseUrl = 'https://api.tuckerchapman.com/stackjobs'

export default {
  name: 'app',
  components: {
    JobList,
    JobSearchForm,
    JobMap
  },
  data () {
    return {
      jobs: [],
      drawer: null,
      dialog: null
    }
  },
  methods: {
    search (params = {}) {
      axios.post(
        apiBaseUrl,
        params,
        { header: {
          'content-type': 'application/json'
        } })
        .then(response => (this.jobs = response.data.data.features))
        .catch(error => (console.log(error)))
    },
    submitForm (data) {
      this.search(data)
    }
  },
  mounted () {
    this.search()
  }
}
</script>

<style>

body {
  padding: 0;
  margin: 0;
 }

html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
}

.leaflet-container {
  z-index: 100;
}

</style>
