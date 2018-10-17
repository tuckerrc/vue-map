<template>
  <form
    id="jobSearch"
    v-on:submit.prevent="handleSubmit"
  >
    <v-flex xs12>
      <v-text-field
        id="search"
        placeholder="Search Jobs"
        name="search"
        v-model="search"
        label="Search"
        single-line
        solo
        append-icon="search"
      ></v-text-field>
    </v-flex>
    <v-flex xs12>
      <v-text-field
        id="location"
        placeholder="Location"
        name="location"
        v-model="location"
        label="Location"
        single-line
        solo
        append-icon="place"
      ></v-text-field>
    </v-flex>
    <v-flex xs12>
      <v-checkbox
        :label="`Remote?`"
        v-model="remote"
      ></v-checkbox>
    </v-flex>
    <v-flex xs12>
      <v-btn
        @click="handleSubmit"
        @submit="handleSubmit"
      >submit</v-btn>
    </v-flex>
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

</style>
