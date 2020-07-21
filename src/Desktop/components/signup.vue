<template>
  <div id="signUpModal" class="modal fade text-center" tabindex="-1" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title mx-auto">Sign Up</h4>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="signUpUsername">Username *</label>
              <input id="signUpUsername" class="form-control text-center" type="text" :value="username" required>
            </div>
            <div class="form-group">
              <label for="signUpPassword">Password *</label>
              <input id="signUpPassword" class="form-control text-center" type="password" :value="password" required>
            </div>
            <div class="form-group">
              <label for="signUpFirstName">First name *</label>
              <input id="signUpFirstName" class="form-control text-center" type="text" :value="firstname" required>
            </div>
            <div class="form-group">
              <label for="signUpLastName">Last name *</label>
              <input id="signUpLastName" class="form-control text-center" type="text" :value="lastname" required>
            </div>
            <div class="form-group">
              <label for="signUpEmail">Email *</label>
              <input id="signUpEmail" class="form-control text-center" type="email" :value="email" required>
            </div>
            <div class="form-group">
              <label for="signUpPhone">Phone</label>
              <input id="signUpPhone" class="form-control text-center" :value="phone" type="tel">
            </div>
            <div class="form-group">
              <label for="signUpCompany">Company</label>
              <input id="signUpCompany" class="form-control text-center" :value="company" type="text">
            </div>
          </form>
          <p class="text-muted m-0">* indicates required field</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary mx-auto" type="submit">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "signup",
      data() {
        return {
          firstname: "",
          lastname: "",
          username: "",
          password: "",
          email: "",
          phone: "",
          company: ""
        }
      }
    }
</script>

<style scoped>

</style>
