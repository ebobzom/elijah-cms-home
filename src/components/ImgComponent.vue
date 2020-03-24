<template>
 <div class="products">
     <div v-for="(product, index) in products" :key="index" class="products-items">
         <b-img class="change-dimension" thumbnail fluid :src="product.imageLink"></b-img>
         <p class="name">{{ product.name}}</p>
         <p class="green">Price: &#8358;{{ product.price }}</p>
         <b-button class="button-styles" variant="success">
             <span :id="product.id" @click="details(product)" >Buy </span>
        </b-button>
     </div>
    
 </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'ImgComponent',
    computed: {
        ...mapState(['products'])
    },
    methods:{
        details(product){
            this.$store.commit('setSelectedObj', product)
            this.$router.push('/detail');
        }
    },
}
</script>

<style scoped>

    .change-dimension{
        width:250px;
        height: 200px;
    }
    .green{
        color: green;
    }

    .name{
        font-weight: 800;
    }
    .button-styles{
        margin: 2px;
    }
    .products{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        float: right;
        margin: 0 auto;
        margin-top: 8px;
    }

    .products-items{
        border: 2px solid grey;
        box-shadow: 5px 5px 5px 5px rgba(0,0,0, .4);
        max-width: 152px;
        padding: 6px;
        margin: 7px;
        margin: 5px auto;
        flex-grow: 1;
    }

</style>