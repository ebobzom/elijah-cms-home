<template>
  <div id="app">
    <div id="product-displayc">
        <CategoryBar />
        <TestPage />
    </div> 
    <ImgComponent />

  </div>
</template>

<script>


import CategoryBar from '../components/CategoryBar';
import ImgComponent from '../components/ImgComponent';
import TestPage from '../components/TestPage';

export default {
    name: 'Home',
    components: {
      CategoryBar,
      ImgComponent,
      TestPage
    }
}
</script>

<style>
 #app{
    margin: 0 auto;
    max-width: 1260px;
  }

  #ft-container{
    width: 100%;
    display: flex;
  }

  .test{
    width: 25%;
    background-color: rgb(240, 238, 238);
    margin-top: 50px;
    margin-bottom: 20px;
    color: black;
    display: inline-block;
    border: none;
  }
  .test a{
    color: rgb(99, 95, 95);
  }

  #product-displayc{
    margin: 0 auto;
    display: flex;
  }

  @media (max-width: 470px){
    .product-display{
      flex-direction: column;
    }

 
    .category{
      min-width: 80%;
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