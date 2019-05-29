<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6">
          <div class="clearfix">
            <h1 class="float-left display-3 mr-4">404</h1>
            <h4 class="pt-3">Oops! You're lost.</h4>
            <p class="text-muted">The page you are looking for was not found.</p>
          </div>
        </b-col>
        <b-col md="12">
            <b-button @click="logout" variant="primary" class="px-5">Logout</b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: 'logout',
  methods: {
    logout: function() {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login');
        })
    }
  }
}
</script>
