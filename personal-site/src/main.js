import Vue from 'vue'
import App from './App.vue'
import Home from './Desktop/Home.vue'
import Blog from './Desktop/Blog.vue'
import Contact from './Desktop/Contact.vue'
import Profile from "./Desktop/Profile.vue"
import Projects from "./Desktop/Projects.vue";
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
    component: Home,
    meta: {
      title: 'Home Page - Ryan Beaumont'
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title;
  });
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
