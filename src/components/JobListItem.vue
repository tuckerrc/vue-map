<template>
  <div class="job-listing" v-bind:class="[primarycategory]">
    <div class="title">
        <a v-bind:href="link">
            {{title}} <span>{{remote}}</span>
        </a>
    </div>
    <div class="location-company">
      <span class="company">
        <span v-if="company">{{company}}</span>
        <span v-else>No Company Name</span>
      </span>
      <span class="location">
        <span v-if="location">{{location}}</span>
        <span v-else>No office location</span>
      </span>
    </div>
    <div class="categories">
      <JobCategory
        v-for="category in categories"
        :category="category"
      />
    </div>
</div>
</template>

<script>
import JobCategory from './JobCategory.vue'

export default {
  components: {
    JobCategory
  },
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: false
    },
    company: {
      type: String,
      required: false
    },
    remote: {
      type: String,
      required: false
    },
    categories: {
      type: Array,
      required: false
    },
    primarycategory: {
      type: String,
      required: false
    }
  }
}
</script>

<style>
.categories::after,
.location-company::after {
    display: block;
    content: "";
    clear: both;
}

.job-listing {
  text-align: left;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 1px 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  border-left: 4px solid #a9a9a9;
}

.job-listing > div {
  margin: 10px;
}

.job-listing .location {
  color: #777777;
  font-style: italic;
}

.company,
.location {
  float: left;
  margin: 0px 10px;
}

a {
  color: #000064;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Language border colors */
.job-listing.python { border-color: #4584b6 }
.job-listing.php, .job-listing.php-7 { border-color: #777bb3 }
.job-listing.go, .job-listing.golang { border-color: #01bca9 }
.job-listing.ruby, .job-listing.ruby-on-rails, .job-listing.rails { border-color: #cc0000 }
.job-listing.java, .job-listing.oracle { border-color: #f80000 }
.job-listing.spring, .job-listing.spring-mvc { border-color: #6db33f }
.job-listing.c { border-color: #000000 }
.job-listing.android { border-color: #6ab344 }
.job-listing.javascript { border-color: #F0DB4F }
.job-listing.c\#, .job-listing.\.net,
.job-listing.asp\.net, .job-listing.asp\.net-mvc,
.job-listing.vb\.net { border-color: #682b7b }
.job-listing.c\+\+ { border-color: #1a4592 }
.job-listing.angularjs, .job-listing.angular { border-color: #b52e31 }
.job-listing.reactjs, .job-listing.react, .job-listing.react\.js { border-color:#61dafb }
.job-listing.vuejs, .job-listing.vue\.js { border-color: #42b883 }
.job-listing.mysql { border-color: #f29111 }
.job-listing.postgresql { border-color: #336791 }
.job-listing.node\.js, .job-listing.node, .job-listing.nodejs { border-color: #215732 }
.job-listing.aws, .job-listing.amazon-web-services { border-color: #ff9900 }
.job-listing.docker { border-color: #0db7ed; color: #384d54 }
.job-listing.git { border-color: #f44d27 }
.job-listing.kotlin { border-color: #f58721 }
.job-listing.swift { border-color: #f05138 }
.job-listing.azure { border-color: #007FFF }
.job-listing.css, .job-listing.css3 { border-color: #0070ba }
.job-listing.html, .job-listing.html5 { border-color: #e54d26 }

</style>
