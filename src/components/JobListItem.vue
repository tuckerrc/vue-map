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
.categories::after {
    display: block;
    content: "";
    clear: both;
}

.job-listing {
  text-align: left;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 1px 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  border-left: 4px solid #006400;
}

.job-listing > div {
  margin: 10px;
}

.job-listing .location {
    color: #777777;
    font-style: italic;
}

a {
  color: #000064;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
