<template>
  <div>
    <Navbar></Navbar>
    <div style="height: 2000px"></div>
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
