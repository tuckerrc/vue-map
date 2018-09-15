<template>
  <form
    id="jobSearch"
    v-on:submit.prevent="handleSubmit"
  >
    <label for="search">Search: </label>
    <input
      id="search"
      class="input"
      name="search"
      type="text"
      v-model="search"
    >
    <label for="location">Location: </label>
    <input
      id="location"
      class="input"
      name="location"
      type="text"
      v-model="location"
    >
    <label for="remote">Remote? </label>
    <input
      id="remote"
      type="checkbox"
      v-model="remote"
    >
    <input
      type="submit"
      value="Search"
    >
  </form>
</template>

<script>
export default {
  props: {
  },
  data () {
    return {
      search: null,
      location: null,
      remote: 'false'
    }
  },
  methods: {
    handleSubmit(event) {
      let strRemote = (this.remote) ? 'true' : 'false'
      var formData = {
        'search': this.search,
        'location': this.location,
        'remote': strRemote
      };
      console.log(formData)
      this.$emit('submit', formData)
    }
  }
}
</script>

<style>

</style>
