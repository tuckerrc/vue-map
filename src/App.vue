<template>
  <div id="app">
    <!--<h1>Job Search (Stack Overflow Jobs)</h1>
    <JobSearchForm
      v-model="search"
      placeholder="Search"
      @submit="submitForm"
    />
    <JobList
      :jobs="jobs"
    />-->
    <JobMap
      :jobs="jobs"
    />
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
      jobs: []
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
@import "../node_modules/leaflet/dist/leaflet.css";

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
