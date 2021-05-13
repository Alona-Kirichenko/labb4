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
      }
    }
  }
</script>
<style scoped>
  p {
    color: crimson;
  }
</style>
