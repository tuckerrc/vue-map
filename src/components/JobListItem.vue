<template>
    <li>
        <span>Title: </span>{{job.properties.title}}<br />
        <span>Location: </span>{{job.properties.location}}<br />
    </li>
</template>

<script>
export default {
  props: {
    job: {
      type: Object,
      required: true
    }
  }
}
</script>
