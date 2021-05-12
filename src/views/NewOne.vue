<template>
  <div id="about">
    <NewOneComponent></NewOneComponent>
  </div>
</template>

<script>
  import NewOneComponent from '@/components/NewOneComponent.vue'
  export default {
    name: 'NewOne',
    components: {
      NewOneComponent
    }
  }
</script>
<style scoped>
  #about {
    color: black;
  }
</style>
