<template>
  <div id="app">
    <NavBar />
    <div id="product-displayc">
        <CategoryBar />
        <TestPage />
    </div> 
    <ImgComponent />
     <!-- <b-card >
        <b-card-text>
            <h6>ok</h6>
            <a class="links" href="#">ok</a>
        </b-card-text>
    </b-card> -->
    <div id="ft-container">
      <!-- <Footer v-for="(containers, index) in urlData" :key="containers.id" :propsUrlList="containers" :titleContent="titleData[index]" /> -->
      <b-card class="test">
        <b-card-text>
            <h6>ABOUT</h6>
            <a href="#">Contact us</a>
            <a href="#">How to shop on Jumia?</a>
            <a href="#">Delivery options and timelines</a>
            <a href="#">How to return a product on Jumia?</a>
            <a href="#">Corporate and bulk purchase</a>
        </b-card-text>
      </b-card>
      <b-card class="test">
        <b-card-text>
            <h6>HELP</h6>
            <a href="#">Contact us</a>
            <a href="#">How to shop on Jumia?</a>
            <a href="#">Delivery options and timelines</a>
            <a href="#">How to return a product on Jumia?</a>
            <a href="#">Corporate and bulk purchase</a>
        </b-card-text>
      </b-card>
      <b-card class="test">
        <b-card-text>
            <h6>JUMIA</h6>
            <a href="#">Contact us</a>
            <a href="#">How to shop on Jumia?</a>
            <a href="#">Delivery options and timelines</a>
            <a href="#">How to return a product on Jumia?</a>
            <a href="#">Corporate and bulk purchase</a>
        </b-card-text>
      </b-card>
      <b-card class="test">
        <b-card-text>
            <h6> MONEY</h6>
            <a href="#">Contact us</a>
            <a href="#">How to shop on Jumia?</a>
            <a href="#">Delivery options and timelines</a>
            <a href="#">How to return a product on Jumia?</a>
            <a href="#">Corporate and bulk purchase</a>
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import CategoryBar from './components/CategoryBar';
import ImgComponent from './components/ImgComponent';
import TestPage from './components/TestPage';
// import Footer from './components/FooterLinkComponent'

export default {
  name: 'App',
  data(){
    return{
      titleData: ['LET US HELP YOU', 'ABOUT JUMIA'],
      urlData: [
        {
          id: 1,
          path: '#',
          content: 'Help Center'
        },
        {
          id: 2,
          path: '#',
          content: 'Contact us'
        }
      ]
    }
  },
  components: {
    NavBar,
    CategoryBar,
    ImgComponent,
    TestPage,
    // Footer
  }
}
</script>

<style>
  #app{
    margin: 0 auto;
    max-width: 1260px;
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
