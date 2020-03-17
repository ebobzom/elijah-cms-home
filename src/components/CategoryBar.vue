<template>
  <div class="category"> 
      <b-button v-for="category in categories" size="md category-item" :key="category.id">{{ category.categoryName }}</b-button>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  data(){
    return {
      categories: [
        {
          id: 1,
          categoryName: 'Phones'
        },
        {
          id: 2,
          categoryName: 'Tablets'
        },
        {
          id: 3,
          categoryName: 'Electronics'
        },
        {
          id: 4,
          categoryName: 'Home Items'
        },
        {
          id: 5,
          categoryName: 'Kitchen'
        },
        {
          id: 6,
          categoryName: 'Other'
        }
      ]
    }
  }
}
</script>

<style scoped>

.btn-md{
  font-weight: 700;
}

  .category{
    display: flex;
    flex-direction: column;
    width: 20%;
    margin-top: 2px;
    margin-right: 8px;
  }
  .category-item{
   margin: 2px;
   height: 52px;
  }
  
</style>