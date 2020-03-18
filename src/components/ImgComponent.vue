<template>
 <div class="products">
     <div v-for="(product, index) in products" :key="index" class="products-items">
         <b-img class="change-dimension" thumbnail fluid :src="product.imageLink"></b-img>
         <p class="name">{{ product.name}}</p>
         <p class="green">Price: &#8358;{{ product.price }}</p>
         <b-button class="button-styles" variant="success">Buy</b-button>
     </div>
    
 </div>
</template>

<script>
export default {
    name: 'ImgComponent',
    props: ['items'],
    data(){
        return {
            products:[
                {
                    name: 'Aida 44 Inch TV',
                    price: '108,000',
                    imageLink: require('../assets/aida-44-inch.jpg'),
                    categoryId: 3
                },
                                {
                    name: 'Bensoni HD TV',
                    price: '150,000',
                    imageLink: require('../assets/bensoni-hd.jpg'),
                    categoryId: 3
                },
                {
                    name: 'Best Seller Books',
                    price: '15,000',
                    imageLink: require('../assets/books.jpg'),
                    categoryId: 6
                },
                {
                    name: 'Loung Chair',
                    price: '40,999',
                    imageLink: require('../assets/field-loung-chair.jpg'),
                    categoryId: 4
                },
                {
                    name: 'Gass Stove',
                    price: '60,999',
                    imageLink: require('../assets/gass-stove.jpg'),
                    categoryId: 4
                },
                {
                    name: 'Imose Kampe',
                    price: '67,999',
                    imageLink: require('../assets/imose-kampe.jpeg'),
                    categoryId: 1
                },
                {
                    name: 'Old Books',
                    price: '5,999',
                    imageLink: require('../assets/old-books.jpg'),
                    categoryId: 6
                },
                {
                    name: 'Phone',
                    price: '180,999',
                    imageLink: require('../assets/phone1.jpg'),
                    categoryId: 1
                },
                {
                    name: 'Samsung Galaxy',
                    price: '77,999',
                    imageLink: require('../assets/samsung-galaxy.jpg'),
                    categoryId: 2
                },
                {
                    name: 'Turn Chair',
                    price: '30,999',
                    imageLink: require('../assets/turn-chair.jpg'),
                    categoryId: 2
                },
                {
                    name: 'Ingo Table',
                    price: '50,999',
                    imageLink: require('../assets/ingo-table.jpg'),
                    categoryId: 6
                }
            ]
        }
    }
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