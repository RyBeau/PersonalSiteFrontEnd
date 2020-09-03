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
              <input id="loginUsername" class="form-control text-center" type="text" :value="loginUsername">
            </div>
            <div class="form-group">
              <label for="loginPassword">Password</label>
              <input id="loginPassword" class="form-control text-center" type="password" :value="loginPassword">
            </div>
            <span>Don't have an Account? <a href="#signUpModal" data-toggle="modal" target="#signuUpModal">Sign Up</a></span>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary mx-auto" type="submit">Log In</button>
        </div>
      </div>
    </div>
    <signup/>
  </div>
</template>

<script>
  import signup from "./signup";
    export default {
        name: "login",
      components: {
          signup
      },
      data(){
          return {
            loginUsername: "",
            loginPassword: ""
          }
      }
    }
</script>

<style scoped>

</style>
