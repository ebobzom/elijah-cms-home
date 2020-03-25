import Vue from 'vue';
import App from './App.vue';
import VueCarousel from 'vue-carousel';
import router from './router/router';
import store from './store/index';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap-css-only/css/bootstrap.min.css'
// import 'mdbvue/lib/css/mdb.min.css'
// import '@fortawesome/fontawesome-free/css/all.min.css'

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
