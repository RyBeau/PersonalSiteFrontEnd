<template>
  <div class="">
    <Navbar></Navbar>
    <div class="container-full-bg">
      <div class="jumbotron mb-0 vh-100">
        <h1 class="display-4">Welcome to my Site</h1>
        <p class="lead">I'm Ryan Beaumont, an Undergraduate Computer Science Student at the University of Canterbury</p>
        <hr class="my-4">
        <p>Here you'll find the projects I have worked on at University and as recreation. You'll also find my Blog
          where I discuss my projects or my other interests.</p>
        <router-link tag="button" class="btn btn-primary" :to="{name: 'Blog'}">Blog</router-link>
        <router-link tag="button" class="btn btn-primary" :to="{name: 'Projects'}">Projects</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar.vue";
  export default {
      name: "Home",
      components: {
        Navbar
      }
  }
</script>
