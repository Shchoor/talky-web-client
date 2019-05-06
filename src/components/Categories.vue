<template>
  <div>
    <div class="container">
      <div class="categories">
        <div v-for="category in allCategories" :key="category.id" class="category">
          <div class="category_header">
            {{category.Title}}
          </div>
          <div class="category_body">
            {{category.Id}}
            Holly Moly
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BreadCrumb from '@/components/BreadCrumb';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'categories',
  computed: mapGetters(['allCategories']),
  methods: {
    ...mapActions(['fetchCategories'])
  },
  created() {
    this.fetchCategories()
  }
}
</script>
<style scoped>
  .category_header {
    background-image: url('https://cdn.vuetifyjs.com/images/parallax/material.jpg');
    background-position: center;
    padding: 20px;
    margin-bottom: 5px;
    color: white;
    text-align: left;
    font-weight: 700;
  }
  .category_body {
    border: solid 1px grey;
    border-radius: 3px;
    margin-bottom: 30px;
  }

</style>
