<template>
  <div>
    <ul v-if="jobs.length">
      <JobListItem
        v-for="job in jobs"
        :key="job.guid"
        :title="job.properties.title"
        :link="job.properties.link"
        :location="job.properties.location"
        :categories="job.properties.category"
      />
    </ul>
    <p v-else>
      No jobs found.
    </p>
  </div>
</template>

<script>
import JobListItem from './JobListItem.vue'
const axios = require('axios')

export default {
  components: {
    JobListItem
  },
  data () {
    return {
      jobs: []
    }
  },
  mounted () {
    axios.post(
      'https://api.tuckerchapman.com/stackjobs',
      {},
      { header: {
        'content-type': 'application/json'
      } })
      .then(response => (this.jobs = response.data.data.features))
      .catch(error => (console.log(error)))
  }
}
</script>
