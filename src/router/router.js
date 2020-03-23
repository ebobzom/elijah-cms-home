import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ProductDetail from '../components/ProductDetails.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/detail/:nameObj',
            name: 'Detail',
            component: ProductDetail,
            props: true
        }
    ]
});

export default router;