<template>
  <div id="app">
    <v-app id="vue-map">
      <v-navigation-drawer
        v-model="drawer"
        fixed
        width="400"
        app
      >
        <JobSearchForm
          v-model="search"
          placeholder="Search"
          @submit="submitForm"
        />
        <JobList
          :jobs="jobs"
        />
      </v-navigation-drawer>
      <v-toolbar dense dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Search Stack Overflow Jobs</v-toolbar-title>
      </v-toolbar>
      <v-content app>
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
      drawer: null
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

</style>
