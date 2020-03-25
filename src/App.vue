<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
    <div id="ft-container">
      <Footer v-for="(containers, index) in urlData" :key="containers.id" :propsUrlList="containers" :titleContent="titleData[index]" />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import Footer from './components/FooterLinkComponent'
import { mapState } from 'vuex';

export default {
  name: 'App',
  computed: {
     ...mapState(['urlData', 'titleData'])
  },
  components: {
    NavBar,
    Footer
  }

}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'); */
body{
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  background-color: #f5f5f5;
}
</style>
