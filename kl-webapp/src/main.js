import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from './router'
import 'swiper/css/swiper.css';
import '../src/assets/css/basic.css'
Vue.use(VueRouter)

// Vue.config.productionTip = false

new Vue({
  el:"#app",
  router,
  render(h){
    return h(App)
  }
})