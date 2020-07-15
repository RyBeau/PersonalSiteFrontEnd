<template>
  <nav class="navbar sticky-top navbar-expand navbar-dark bg-primary">
    <router-link class="navbar-brand" :to="{name: 'Home'}">
      <h3>Ryan Beaumont</h3>
    </router-link>
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link v-if="this.$route.name === 'Home'" class="nav-link active" :to="{name: 'Home'}">Home</router-link>
        <router-link v-else class="nav-link" :to="{name: 'Home'}">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link v-if="this.$route.name === 'Blog'" class="nav-link active" :to="{name: 'Home'}">Blog</router-link>
        <router-link v-else class="nav-link" :to="{name: 'Home'}">Blog</router-link>
      </li>
      <li class="nav-item">
        <router-link v-if="this.$route.name === 'Project'" class="nav-link" :to="{name: 'Home'}">Projects</router-link>
        <router-link v-else class="nav-link" :to="{name: 'Home'}">Projects</router-link>
      </li>
      <li class="nav-item">
        <router-link v-if="this.$route.name === 'Contact'" class="nav-link" :to="{name: 'Home'}">Contact</router-link>
        <router-link v-else class="nav-link" :to="{name: 'Home'}">Contact</router-link>
      </li>
      <li class="nav-item">
        <router-link v-if="this.$route.name === 'Profile'" class="nav-link" :to="{name: 'Home'}">Profile</router-link>
        <router-link v-else class="nav-link" :to="{name: 'Home'}">Profile</router-link>
      </li>
    </ul>
    <router-link tag="button" class="btn btn-outline-light ml-md-auto" :to="{name: 'Login'}"> Log In</router-link>
  </nav>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>
