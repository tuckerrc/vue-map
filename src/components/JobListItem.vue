<template>
    <div class="job-listing">
        <div class="title">Title: {{job.properties.title}}</div>
        <div class="location">Location:
            <span v-if="job.properties.location">{{job.properties.location}}</span>
            <span v-else>No office location</span>
        </div>
        <div class="categories">
            <JobCategory
              v-for="category in job.properties.category"
              :category="category"
            />
        </div>
    </div>
</template>

<script>
import JobCategory from "./JobCategory.vue"

export default {
  components: {
      JobCategory
  },
  props: {
    job: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
    .job-listing {
        text-align: left;
        padding: 20px;

    }
</style>
