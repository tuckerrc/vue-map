<template>
  <div id="app">
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
</template>

<script>
import JobList from './components/JobList.vue'
import JobSearchForm from './components/JobSearchForm.vue'

const axios = require('axios')
const apiBaseUrl = 'https://api.tuckerchapman.com/stackjobs'

export default {
  name: 'app',
  components: {
    JobList,
    JobSearchForm
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
      this.search(data);
    }
  },
  mounted () {
    this.search()
  }
}
</script>

<style>

#app {
  width: 800px;
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 25px;
  padding: 20px 20px;
}

@media (min-width: 768px) and (max-width: 1024px) {
  #app {
    width: 90%;
    padding: 0px 5%;
  }
}

@media (max-width: 768px) {
  #app {
    width: 100%;
    padding: 0px;
  }
}
</style>
