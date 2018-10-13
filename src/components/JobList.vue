<template>
  <div>
    <ul v-if="jobs.length">
      <JobListItem
        v-for="job in jobs"
        :key="job.guid"
        :title="job.properties.title"
        :link="job.properties.link"
        :location="job.properties.location"
        :company="job.properties.company"
        :remote="job.properties.remote"
        :categories="job.properties.category"
        :primarycategory="job.properties.category[0]"
      />
    </ul>
    <p v-else>
      No jobs found.
    </p>
  </div>
</template>

<script>
import JobListItem from './JobListItem.vue'

export default {
  components: {
    JobListItem
  },
  props: {
    jobs: {
      type: Array,
      required: false
    }
  },
  methods: {
  }
}
</script>

<style>
ul {
  padding-left: 10px;
  margin-top: 30px;
}
</style>
