<template>
  <div class="job-listing">
    <div class="title"><a v-bind:href="link">{{title}}</a></div>
    <div class="location">Location:
      <span v-if="location">{{location}}</span>
      <span v-else>No office location</span>
    </div>
    <div class="categories">
      <JobCategory
        v-for="category in categories"
        :category="category"
      />
    </div>
</div>
</template>

<script>
import JobCategory from './JobCategory.vue'

export default {
  components: {
    JobCategory
  },
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: false
    },
    categories: {
      type: Array,
      required: false
    }
  }
}
</script>

<style>
.job-listing {
  text-align: left;
  padding: 20px;
}

.job-listing > div {
  margin: 10px;
}

a {
  color: #2f4135;
  text-decoration: none;
}

a:hover {
  color: #c59169;
  text-decoration: underline;
}
</style>
