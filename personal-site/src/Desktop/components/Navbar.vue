<template>
  <nav class="navbar sticky-top navbar-expand navbar-dark bg-primary shadow-lg">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link v-if="this.$route.name === 'Home'" class="nav-link active" :to="{name: 'Home'}">Home</router-link>
        <router-link v-else class="nav-link" :to="{name: 'Home'}">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link v-if="this.$route.name === 'Blog'" class="nav-link active" :to="{name: 'Blog'}">Blog</router-link>
        <router-link v-else class="nav-link" :to="{name: 'Blog'}">Blog</router-link>
      </li>
      <li class="nav-item">
        <router-link v-if="this.$route.name === 'Projects'" class="nav-link active" :to="{name: 'Projects'}">Projects</router-link>
        <router-link v-else class="nav-link" :to="{name: 'Projects'}">Projects</router-link>
      </li>
      <li class="nav-item">
        <router-link v-if="this.$route.name === 'Contact'" class="nav-link active" :to="{name: 'Contact'}">Contact</router-link>
        <router-link v-else class="nav-link" :to="{name: 'Contact'}">Contact</router-link>
      </li>
      <li class="nav-item">
        <router-link v-if="this.$route.name === 'Profile'" class="nav-link active" :to="{name: 'Profile'}">Profile</router-link>
        <router-link v-else class="nav-link" :to="{name: 'Profile'}">Profile</router-link>
      </li>
    </ul>
    <button v-if="!loggedIn" tag="button" class="btn btn-outline-light ml-md-auto" data-toggle="modal" data-target="#loginModal">Log In</button>
    <button v-else tag="button" class="btn btn-outline-light ml-md-auto">Log Out</button>
  </nav>
</template>

<script>
    import Login from "./login";
    export default {
      name: "Navbar",
      components: {Login},
      data() {
        return {
          loggedIn: false
        }
      }
    }
</script>
