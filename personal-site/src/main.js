import Vue from 'vue'
import App from './App.vue'
import Home from './Desktop/Home.vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex';

Vue.use(VueRouter, Vuex);

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
