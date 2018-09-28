<template>
  <form
    class="my-4"
    id="jobSearch"
    v-on:submit.prevent="handleSubmit"
  >
    <div class="flex flex-wrap">
      <input
        id="search"
        placeholder="Search Jobs"
        class="shadow appearance-none border rounded w-30 mb-4 py-2 px-3 mr-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
        name="search"
        type="text"
        v-model="search"
      >
      <input
        id="location"
        placeholder="Location"
        class="shadow appearance-none border rounded w-30 mb-4 py-2 px-3 mr-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
        name="location"
        type="text"
        v-model="location"
      >
      <span class="m-2 display-inline">
        <label for="remote">Remote? </label>
        <input
          id="remote"
          type="checkbox"
          v-model="remote"
        >
      </span>
      <button
        class="bg-blue hover:bg-blue-dark text-white font-bold mb-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >Search</button>
    </div>
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
      remote: false
    }
  },
  methods: {
    handleSubmit (event) {
      var formData = {
        'search': this.search,
        'location': this.location
      }

      if (this.remote) { formData.remote = 'true' }

      console.log(formData)
      this.$emit('submit', formData)
    }
  }
}
</script>

<style>
  input {
    margin: 0px 10px;
  }
</style>
