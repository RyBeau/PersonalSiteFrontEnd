<template>
  <div>
    <div class="jumbotron mb-0 vh-100 bg-light text-center">
      <h1> Oops, an error has occurred</h1>
      <p>You'll be redirected to the homepage shortly</p>
      <hr class="my-4">
      <div class="spinner-grow text-danger"></div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Error",
      methods:{
        redirect: function () {
          setTimeout(() => {
            this.$router.push({name: 'Home'});
          }, 3500);
        }
      },
    mounted: function () {
      this.redirect()
    }
    }
</script>
