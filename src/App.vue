<template>
  <div id="app">
    <div class="navbar">
      <span id="menu-btn" class="menu-btn" v-on:click="toggleSidebar">☰</span>
      <JobSearchForm
        v-model="search"
        placeholder="Search"
        @submit="submitForm"
      />
    </div>
    <div class="content-wrapper">
      <div id="sidebar" class="sidebar-container" v-bind:class="{ active: showSidebar }">
        <div class="sidebar-content">
          <JobList
            :jobs="jobs"
          />
        </div>
      </div>
      <div class="map-container">
        <div class="map-content">
          <JobMap
            :jobs="jobs"
          />
        </diV>
      </div>
    </div>
  </div>
</template>

<script>
import JobList from './components/JobList.vue'
import JobSearchForm from './components/JobSearchForm.vue'
import JobMap from './components/JobMap.vue'

const axios = require('axios')
const apiBaseUrl = 'https://api.tuckerchapman.com/stackjobs'

export default {
  name: 'app',
  components: {
    JobList,
    JobSearchForm,
    JobMap
  },
  data () {
      return {
        jobs: [],
        showSidebar: true
    }
  },
  methods: {
    search (params = {}) {
      axios.post(
        apiBaseUrl,
        params,
        { header: {
          'content-type': 'application/json'
        } })
        .then(response => (this.jobs = response.data.data.features))
        .catch(error => (console.log(error)))
    },
    submitForm (data) {
      this.search(data)
    },
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    }
  },
  mounted () {
    this.search()
  }
}
</script>

<style>

  body {
    padding: 0;
    margin: 0;
  }

  #app {
    height: 100vh; /* or position:absolute; height:100%; */
    display: flex;
    flex-direction: column;
    padding: 0px;
    margin: 0px;
  }

  .menu-btn {
    font-size: 30px;
    float: left;
    cursor: pointer;
    padding: 0px 10px;
  }

  .menu-btn:hover {
    background-color: grey;
  }

  .navbar {
    padding: 10px 20px;
    background-color: black;
    color: white;
    z-index: 0;
  }

  .content-wrapper {
    display: flex;
    flex: 1;
    min-height: 0px; /* IMPORTANT: you need this for non-chrome browsers */
  }

  .sidebar-container {
    flex: 0;
    overflow: auto;
    transition: flex-grow 300ms ease-in-out;
  }

  .sidebar-container.active {
    flex: 1;
  }

  .sidebar-content {
    color: black;
  }

  .map-container {
    flex: 3;
    overflow: auto;
  }

  .map-content {
    height: 100%;
  }
</style>
