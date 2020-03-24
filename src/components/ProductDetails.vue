<template>
  <div>
      <div class="main-container">

            <div class="container">
                <div class="img-container">
                    <img class="main-img" :src="selectedObj.imageLink[0]" alt="main image">
                    <div class="sub-img">
                        <img :src="selectedObj.imageLink[1]" alt="different image view">
                        <img :src="selectedObj.imageLink[2]" alt="different image view">
                        <img :src="selectedObj.imageLink[3]" alt="different image view">
                    </div>
                </div>

                <div class="product-infomation">
                    <b-card bg-variant="dark" text-variant="white" title="Product Information">
                        <b-card-text class="title-text">
                            {{ selectedObj.name }}
                        </b-card-text>
                        <b-card-text>&#8358;{{ selectedObj.price }}</b-card-text>
                        <b-button href="#" variant="primary">Add to Cart</b-button>
                    </b-card>

                </div>
            </div>
            <div class="product-infomation">
                <h3>Product Detail</h3>
                <p>{{ selectedObj.productDetail }}</p>
            </div>
      </div>

  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'ProductDetail',
    computed: {
        ...mapState(['selectedObj'])
    }
}
</script>

<style>

.title-text{
    color: rgb(96, 96, 228);
}

h3{
    color: rgb(80, 80, 170);
    font-weight: 800;
    text-transform: capitalize;
}
p{
    font-size: 22px;
}

.container{
    width: 100%;
    display: flex;
    padding: 4px;
    margin: 5px;
}

.img-container{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 4px;
}

.product-infomation{
    width: 100%;
    margin: 4px;;
}

.img-container{
    width: 70%;
}

.main-img{
    display: block;
    width: 100%;
    height: 300px;
}

.sub-img{
    width: 100%;
    display: block;
}
.sub-img img{
    height: 70px;;
    width: 70px;
    padding: 4px;
    margin: 4px;
}

</style>