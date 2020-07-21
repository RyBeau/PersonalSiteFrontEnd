<template>
  <div class="">
    <div class="container-full-bg">
      <div class="jumbotron mb-0 vh-100 bg-light">
        <h1 class="display-4">Welcome to my Site</h1>
        <p class="lead">I'm Ryan Beaumont, an Undergraduate Computer Science Student at the University of Canterbury</p>
        <hr class="my-4">
        <p>Here you'll find the projects I have worked on at University and as recreation. You'll also find my Blog
          where I discuss my projects and other interests.</p>
        <router-link tag="button" class="btn btn-primary" :to="{name: 'Projects'}">Projects</router-link>
        <router-link tag="button" class="btn btn-primary" :to="{name: 'Blog'}">Blog</router-link>
        <a class="btn btn-primary" href="https://github.com/rybeau" target="_blank">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data: {
      show: false
    }
  }
</script>
