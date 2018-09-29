<template>
  <form
    id="jobSearch"
    v-on:submit.prevent="handleSubmit"
  >
    <input
      id="search"
      placeholder="Search Jobs"
      class="input"
      name="search"
      type="text"
      v-model="search"
    >
    <input
      id="location"
      placeholder="Location"
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
    <button type="submit">Search</button>
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
    display: inline-block;
    padding: .5rem .75rem;
    font-size: 1rem;
    line-height: 1.25;
    color: #464a4c;
    background-color: #fff;
    background-image: none;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: .25rem;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
  }

  button {
    display: inline-block;
    font-weight: 400;
    line-height: 1.25;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    padding: .5rem 1rem;
    font-size: 1rem;
    border-radius: .25rem;
    -webkit-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    color: #fff;
    background-color: #0275d8;
    border-color: #0275d8;
    cursor: pointer;
  }

  button:hover {
    color: #fff;
    background-color: #025aa5;
    border-color: #01549b;
  }

</style>
