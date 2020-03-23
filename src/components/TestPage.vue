<template>
  <div class="imgContain">
    <carousel :loop=true :perPage=1 :autoplay=true>
        <slide v-for="image in imageLinks" :key="image.imgLink">
            <img class="imgStyle" :src="image.imgLink" alt="image carousel" />
        </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    data(){
        return{
            imageLinks: [
                {
                    imgLink: require('../assets/img1.jpg')
                },
                {
                    imgLink: require('../assets/img2.jpeg')
                },
                {
                    imgLink: require('../assets/img3.jpg')
                },
                {
                    imgLink: require('../assets/img4.jpg')
                }
            ]
        }
    },
  components: {
    Carousel,
    Slide
  }
};
</script>

<style scoped>
    .imgStyle{
        width: 80%;
        height: 320px;
        padding: 2px;
        margin: 0 auto;
        box-shadow: 2px -5px 2px 2px rgba(0,0,0, .2);
    }

    .imgContain{
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }
</style>