<template>

    <b-card class="each-card">
        <b-card-text>
            <h6>{{titleContent}}</h6>
            <a v-for="(cont, index) in propsUrlList.content" :key="index" class="links" href="#">{{ cont }}</a>
        </b-card-text>
    </b-card>

</template>

<script>
export default {
    props: ['propsUrlList', 'titleContent']
}
</script>

<style scoped>


    .each-card{
        border: none;
        margin-top: 20px;
        width: 25%;
        background-color: #f5eded;
    }

    .links{
        margin: 0;
        padding: 0;
        display: block;
        color: rgb(61, 54, 54);
        font-size: 12px;
    }
</style>