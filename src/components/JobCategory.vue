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
  padding: 10px;
}
</style>
