<template>
  <div>
    <p>{{ aboutSite }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      aboutSite: {
        type: String
        /* require: false,
        default: 'no' */
      }
    }
  }
</script>
<style scoped>
  p {
    color: crimson;
  }
</style>
