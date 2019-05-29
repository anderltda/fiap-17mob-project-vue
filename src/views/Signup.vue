
<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <h1>Sign up</h1>
                  <p class="text-muted">Create your account</p>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend></b-input-group-prepend>
                    <b-form-input
                      v-model="fullname"
                      type="text"
                      class="form-control"
                      placeholder="Full Name"
                      autocomplete="name"
                    />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend></b-input-group-prepend>
                    <b-form-input
                      v-model="email"
                      type="email"
                      class="form-control"
                      placeholder="E-mail"
                      autocomplete="email"
                    />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend></b-input-group-prepend>
                    <b-form-input
                      v-model="password"
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      autocomplete="current-password"
                    />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend></b-input-group-prepend>
                    <b-form-input
                      v-model="phone"
                      type="tel"
                      class="form-control"
                      placeholder="Phone"
                      autocomplete="current-phone"
                    />
                  </b-input-group>
                  <b-row>
                    <b-col cols="12">
                      <b-button @click="signup" variant="primary" class="px-5">Create</b-button>
                    </b-col>
                    <b-col cols="12">
                      <b-button variant="primary" class="active mt-3">
                        <router-link to="/login">Back</router-link>
                      </b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: "Signup",
  data() {
    return {
      fullname: '',
      phone: '',
      email: '',
      password: ''
    };
  },
  methods: {
    signup: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("home");
          },
          err => {
            alert(err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
</style>