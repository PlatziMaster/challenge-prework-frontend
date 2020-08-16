<template>
  <div class="hello">
    <h1>{{ user }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    user: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
