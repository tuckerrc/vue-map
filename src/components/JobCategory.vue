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
  margin: 0px 10px 5px 0px;
  border-radius: 3px;
  float: left;
  background-color: #646464;
  color: #FFFFFF;
}

@media (min-width: 768px) and (max-width: 1024px) {

}

@media (max-width: 768px) {

}
</style>
