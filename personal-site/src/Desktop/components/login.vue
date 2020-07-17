<template>
  <div id="loginModal" class="modal fade text-center" tabindex="-1" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title mx-auto">Log In</h4>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="loginUsername">Username</label>
              <input id="loginUsername" class="form-control" type="text">
            </div>
            <div class="form-group">
              <label for="loginPassword">Password</label>
              <input id="loginPassword" class="form-control" type="password">
            </div>
            <span>Don't have an Account? <router-link :to="{name:'Home'}">Sign Up</router-link></span>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary mx-auto" type="submit">Log In</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>

</style>
