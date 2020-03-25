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
                    <b-card class="detail-width" bg-variant="light" text-variant="white">
                        <b-card-text class="title-text">
                            {{ selectedObj.name }}
                            <BIconHeart class="heart-position" />
                        </b-card-text>
                        <b-card-text>
                            <p class="category">
                                <span class="brand">Category: </span>
                                {{ selectedObj.category }}
                            </p>
                            <p>
                                <BIconStar class="star" />
                                <BIconStar class="star"/>
                                <BIconStar class="star" />
                                <BIconStar class="star" />
                                <BIconStar class="star" />
                            </p>
                        </b-card-text>
                        <b-card-text class="price">&#8358; {{ selectedObj.price }}</b-card-text>
                        <b-button href="#" class="cart" variant="primary">
                            ADD TO CART
                        </b-button>
                    </b-card>

                </div>
            </div>
            <div class="product-infomation">
                <h3>Product details</h3>
                <p class="details-font">{{ selectedObj.productDetail }}</p>
            </div>
      </div>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import { BIconHeart, BIconStar } from 'bootstrap-vue';
export default {
    name: 'ProductDetail',
    computed: {
        ...mapState(['selectedObj'])
    },
    components: {
        BIconHeart,
        BIconStar
    }
}
</script>

<style>
.details-font{
    font-size: 16px;
}

.star{
    color: #f68b1e;
}

.price{
    color: black;
    font-weight: 500;
}

.brand{
    font-size: 20px;
    font-weight: 600;
    margin-left: 4px;
    color: rgb(92, 88, 88);
}

.category{
    color: rgb(177, 132, 65);
    font-size: 18px;
}

.cart{
    background-color: #f68b1e;
    width: 90%;
    height: 42px;
    margin: 0 auto;
    display: block;
}

.heart-position{
    margin-left: 55%;
    color: #f68b1e;
    font-size: 1.5em;
}

.title-text{
    color: rgb(107, 106, 106);
    padding: 5px;
    font-size: 24px;
    font-weight: 600;

}

h3{
    font-weight: 800;
    font-size: 24px;
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
    margin: 4px;
    margin: 0 auto;
}

.img-container{
    width: 70%;
    border: 1px solid #d9dadb;
    border-radius: 5px;
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

@media screen and (max-width: 770px){
    .heart-position{
        margin-left: 40%;
    }
    
    .img-container{ 
        border: 2px solid green;
    }
    .detail-width{
        border: 2px solid red;
        margin-left: 20px;
    }
    .sub-img{
        display: flex;
    }
}

@media screen and (max-width: 400px){
    .heart-position{
        margin-left: 5px;
    }

    .sub-img{
        display: flex;
    }

    .sub-img img{
    height: 70px;;
    width: 40px;
    padding: 4px;
    margin: 4px;

    }
    .cart{
        height: 52px;
    }
}

</style>