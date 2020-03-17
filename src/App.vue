<template>
  <div id="app">
    <NavBar />
    <div class="product-display">
      <CategoryBar />
      <ImgComponent />
    </div> 
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import CategoryBar from './components/CategoryBar';
import ImgComponent from './components/ImgComponent';

export default {
  name: 'App',
  components: {
    NavBar,
    CategoryBar,
    ImgComponent
  }
}
</script>

<style>
  #app{
    margin: 0 auto;
    max-width: 1260px;
  }

  .product-display{
    margin: 0 auto;
    display: flex;
  }

  @media (max-width: 470px){
    .product-display{
      flex-direction: column;
    }

    .category{
      min-width: 90%;
      margin: 0 auto;
      text-align: center;
      margin-left: 19px;
      margin-right: 0px;
    }

    .products{
      margin: 0 auto;
    }
  }

</style>
