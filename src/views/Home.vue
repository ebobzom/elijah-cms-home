<template>
  <div id="app">
    <NavBar />
    <div id="product-displayc">
        <CategoryBar />
        <TestPage />
    </div> 
    <ImgComponent />
    <div id="ft-container">
      <Footer v-for="(containers, index) in urlData" :key="containers.id" :propsUrlList="containers" :titleContent="titleData[index]" />
    </div>
  </div>
</template>

<script>

import NavBar from '../components/NavBar';
import CategoryBar from '../components/CategoryBar';
import ImgComponent from '../components/ImgComponent';
import TestPage from '../components/TestPage';
import Footer from '../components/FooterLinkComponent'
export default {
    name: 'App',
  data(){
    return{
      titleData: ['LET US HELP YOU', 'ABOUT JUMIA', 'MAKE MONEY WITH JUMIA', 'JUMIA INTERNATIONAL'],
      urlData: [
        {
          id: 1,
          path: '#',
          content: [
            'Help Center', 
            'Contact us',
            'How to shop on Jumia?',
            'Delivery options and timelines',
            'How to return a product on Jumia?',
            'Corporate and bulk purchases'
            ]
        },
        {
          id: 2,
          path: '#',
          content: [
            'About us',
            'Jumia careers',
            'Jumia Express',
            'Terms and Conditions',
            'Privacy policy',
            'Tech Week',
            'Jumia Prime',
            'Stay Safe'
          ]
        },
        {
          id: 3,
          path: '#',
          content: [
            'Sell on Jumia',
            'Become an Affiliate Partner',
            'Become a Sales Consultant',
            'Become a Jumia Vendor Service Provider',
            'Become a Logistics Service Partner'
          ]
        },
        {
          id: 4,
          path: '#',
          content: [
            'Algeria',
            'Egypt',
            'Ghana',
            'Ivory Coast',
            'Kenya',
            'Morocco'
          ]
        }
      ]
    }
  },
  components: {
    NavBar,
    CategoryBar,
    ImgComponent,
    TestPage,
    Footer
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