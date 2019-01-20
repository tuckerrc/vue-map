<template>
  <form
    id="jobSearch"
    v-on:submit.prevent="handleSubmit"
  >
    <div class="input">
      <input
        id="search"
        placeholder="Search Jobs"
        class="input"
        name="search"
        type="text"
        v-model="search"
      >
    </div>
    <div class="input">
      <input
        id="location"
        placeholder="Location"
        class="input"
        name="location"
        type="text"
        v-model="location"
      >
    </div>
    <div class="input">
      <input
        id="remote"
        type="checkbox"
        v-model="remote"
      >
      <label for="remote">Remote? </label>
      <div class="submit">
        <button type="submit">Search</button>
      </div>
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
  .input,
  .submit {
    clear: both;
  }

  .submit {
    margin-right: 10px;
    float: right;
  }

  input[type="text"] {
    box-sizing: border-box;
  	-webkit-box-sizing: border-box;
  	-moz-box-sizing: border-box;
  	outline: none;
  	display: block;
  	width: 100%;
  	padding: 7px;
  	border: none;
  	border-bottom: 1px solid #ddd;
  	background: transparent;
  	margin-bottom: 10px;
  	font: 16px Arial, Helvetica, sans-serif;
  	height: 45px;
  }

  button[type="button"],
  button[type="submit"]{
    -moz-box-shadow: inset 0px 1px 0px 0px #45D6D6;
  	-webkit-box-shadow: inset 0px 1px 0px 0px #45D6D6;
  	box-shadow: inset 0px 1px 0px 0px #45D6D6;
  	background-color: #2CBBBB;
  	border: 1px solid #27A0A0;
  	display: inline-block;
  	cursor: pointer;
  	color: #FFFFFF;
  	font-family: 'Open Sans Condensed', sans-serif;
  	font-size: 14px;
  	padding: 8px 18px;
  	text-decoration: none;
  	text-transform: uppercase;
  }

  input[type="button"]:hover,
  input[type="submit"]:hover {
  	background:linear-gradient(to bottom, #34CACA 5%, #30C9C9 100%);
  	background-color:#34CACA;
  }

</style>
