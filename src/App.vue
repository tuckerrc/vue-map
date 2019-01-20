<template>
  <div id="app">
    <div class="sidebar">
      <h1>Job Search (Stack Overflow Jobs)</h1>
      <JobSearchForm
        v-model="search"
        placeholder="Search"
        @submit="submitForm"
      />
      <JobList
        :jobs="jobs"
      />
    </div>
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

body {
  padding: 0;
  margin: 0;
 }

html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
}

h1 {
  font-size: 20px;
  margin-left: 20px;
}

.sidebar {
   width: 25%;
   height: 100%;
   position: fixed;
   left: 0px;
   top: 0px;
   border: 1px solid black;
   overflow: hidden auto;
}


</style>
