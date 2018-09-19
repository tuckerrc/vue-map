<template>
  <span class="category">{{category}}</span>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.category {
  padding: 5px 10px;
  margin: 0px 10px;
  border-radius: 3px;
  float: left;
}
</style>
