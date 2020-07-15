<template>
  <div>
    <Navbar></Navbar>
    <div class="card w-25 text-center shadow-lg mx-auto border-dark" style="margin-top: 30px">
      <div class="card-header">
        <h4 class="card-title">Contact Me</h4>
      </div>
      <div class="card-body">
        <div class="form-group">
          <label for="contactName">Name</label>
          <input type="text" class="form-control shadow-sm" id="contactName">
        </div>
        <div class="form-group">
          <label for="contactEmail">Email</label>
          <input type="email" class="form-control shadow-sm" id="contactEmail">
        </div>
        <div class="form-group">
          <label for="contactPhone">Phone</label>
          <input type="tel" class="form-control shadow-sm" id="contactPhone">
        </div>
        <div class="form-group">
          <label for="contactMessage">Message</label>
          <textarea rows="5" class="form-control shadow-sm" id="contactMessage"></textarea>
        </div>
        <button class="btn btn-primary shadow">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
    import Navbar from "./components/Navbar";
    export default {
        name: "Contact",
      components: {Navbar}
    }
</script>

<style scoped>

</style>
