<template>
  <div>
    <div class="card w-25 text-center shadow-lg mx-auto" style="margin-top: 30px; min-width: 400px;">
      <div class="card-header">
        <h4 class="card-title">Contact Me</h4>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="contactName">Name</label>
            <input type="text" class="form-control shadow-sm" id="contactName" required>
            <small class="form-text text-muted">Required</small>
          </div>
          <div class="form-group">
            <label for="contactEmail">Email</label>
            <input type="email" class="form-control shadow-sm" id="contactEmail" required>
            <small class="form-text text-muted">Required</small>
          </div>
          <div class="form-group">
            <label for="contactPhone">Phone</label>
            <input type="tel" class="form-control shadow-sm" id="contactPhone">
          </div>
          <div class="form-group">
            <label for="contactMessage">Message</label>
            <textarea rows="5" class="form-control shadow-sm" id="contactMessage" required></textarea>
            <small class="form-text text-muted">Required</small>
          </div>
          <button type=submit class="btn btn-primary shadow">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>

</style>
