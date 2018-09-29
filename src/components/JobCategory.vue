<template>
  <span class="category" v-bind:class="[category]">{{category}}</span>
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


/* Category background colors */
.category.python { background-color: #4584b6 }
.category.php, .category.php-7 { background-color: #777bb3 }
.category.go, .category.golang { background-color: #01bca9 }
.category.ruby, .category.ruby-on-rails, .category.rails { background-color: #cc0000 }
.category.java, .category.oracle { background-color: #f80000 }
.category.spring, .category.spring-mvc { background-color: #6db33f }
.category.c { background-color: #000000 }
.category.android { background-color: #6ab344 }
.category.javascript { background-color: #F0DB4F; color: #444444; }
.category.c\#, .category.\.net, .category.asp\.net, .category.asp\.net-mvc, .category.vb\.net { background-color: #682b7b }
.category.c\+\+ { background-color: #1a4592 }
.category.angularjs, .category.angular { background-color: #b52e31 }
.category.reactjs, .category.react, .category.react\.js { background-color:#61dafb; color: #000000 }
.category.vuejs, .category.vue\.js { background-color: #42b883 }
.category.mysql { background-color: #f29111 }
.category.postgresql { background-color: #336791 }
.category.node\.js, .category.node, .category.nodejs { background-color: #215732 }
.category.aws, .category.amazon-web-services { background-color: #ff9900 }
.category.docker { background-color: #0db7ed; color: #384d54 }
.category.git { background-color: #f44d27 }
.category.kotlin { background-color: #f58721 }
.category.swift { background-color: #f05138 }
.category.azure { background-color: #007FFF }
.category.css, .category.css3 { background-color: #0070ba }
.category.html, .category.html5 { background-color: #e54d26 }

@media (min-width: 768px) and (max-width: 1024px) {

}

@media (max-width: 768px) {

}
</style>
