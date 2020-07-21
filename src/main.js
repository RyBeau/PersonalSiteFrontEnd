import Vue from 'vue'
import App from './App.vue'
import Home from './Desktop/Home.vue'
import Blog from './Desktop/Blog.vue'
import Contact from './Desktop/Contact.vue'
import Profile from "./Desktop/Profile.vue"
import Projects from "./Desktop/Projects.vue";
import Error from "./Desktop/Error.vue";
import VueRouter from 'vue-router';
import Vuex from 'vuex';

Vue.use(VueRouter, Vuex);

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

const ghPath = '/PersonalSiteFrontEnd';


const routes = [
  {
    path: ghPath + '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home - Ryan Beaumont'
    }
  },
  {
    path: ghPath + '/blog',
    name: 'Blog',
    component: Blog,
    meta: {
      title: 'Blog - Ryan Beaumont'
    }
  },
  {
    path: ghPath + '/projects',
    name: 'Projects',
    component: Projects,
    meta: {
      title: 'Projects - Ryan Beaumont'
    }
  },
  {
    path: ghPath + '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact - Ryan Beaumont'
    }
  },
  {
    path: ghPath +'/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: 'Your Profile'
    }
  },
  {
    path: '*',
    name: 'Error',
    component: Error,
    meta: {
      title: 'Oops - Error'
    }
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
  render: h => h(App),
  created() {
    if (localStorage.path){
      const path = localStorage.path;
      localStorage.removeItem("path");
      this.$router.push(path);
    }
  }
});
