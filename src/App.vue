<template>
  <div id="app">
    <h1>Job Search (Stack Overflow Jobs)</h1>
    <JobList/>
  </div>
</template>

<script>
import JobList from './components/JobList.vue'
import './assets/styles/main.css'

export default {
  name: 'app',
  components: {
    JobList
  }
}
</script>

<style>

#app {
  width: 800px;
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 25px;
  padding: 20px 20px;
}

@media (min-width: 768px) and (max-width: 1024px) {
  #app {
    width: 90%;
    padding: 0px 5%;
  }
}

@media (max-width: 768px) {
  #app {
    width: 100%;
    padding: 0px;
  }
}
</style>
