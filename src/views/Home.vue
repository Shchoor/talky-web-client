<template>
  <div class="home">
    <h1>This is home</h1>
    <Categories />
    <div class="space"></div>
  </div>

</template>

<script>
// @ is an alias to /src
import Categories from '@/components/Categories.vue'
export default {
  name: 'home',
  components: {
    Categories
  }
}



</script>

<style lang="scss" scoped>
  .space {
    height: 1000px;
  }

</style>
