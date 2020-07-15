<template>
  <div>
    <Navbar></Navbar>
    <div class="jumbotron mb-0 vh-100 bg-light text-center">
      <h1> Oops, an error has occurred</h1>
      <p>You'll be redirected to the homepage shortly</p>
      <hr class="my-4">
      <div class="spinner-grow text-danger"></div>
    </div>
  </div>
</template>

<script>
    import Navbar from "./components/Navbar";
    export default {
      name: "Error",
      components: {Navbar},
      methods:{
        redirect: function () {
          setTimeout(() => {
            this.$router.push("/");
          }, 3500);
        }
      },
    mounted: function () {
      this.redirect()
    }
    }
</script>
