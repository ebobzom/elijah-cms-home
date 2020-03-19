<template>

    <b-card class="each-card">
        <b-card-text>
            <h6>{{titleContent}}</h6>
            <a class="links" href="#">{{ propsUrlList.content }}</a>
        </b-card-text>
    </b-card>

</template>

<script>
export default {
    props: ['propsUrlList', 'titleContent']
}
</script>

<style scoped>
    h6{
        font-size: 18px;
        text-align: left;
        padding: 0;
        margin: 0;
    }

    .links{
        margin: 0;
        padding: 0;
        width: 100px;
        color: red;
        text-align: left;
        /* margin-right: 90px; */
    }

    .each-card{
        width: 100px;
        margin: 0 auto;
        text-align: center;
        /* background-color: #323232; */
    }

    .footer-link{
        border: 2px solid green;
    }
</style>