
<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <h1>Profile</h1>
                  <p class="text-muted">Update your account</p>
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
                      readonly
                    />
                    
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend></b-input-group-prepend>
                    <b-form-input
                      v-model="phone"
                      type="number"
                      class="form-control"
                      placeholder="Phone"
                      autocomplete="current-phone"
                    />
                  </b-input-group>
                  <b-row>
                    <b-col cols="12">
                      <b-button @click="edit" variant="primary" class="px-5">Save</b-button>
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
import { db } from '../main'

window.addEventListener("load", function(event) {
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {

          const docRef = db.collection("APP_USER_DEFAULT").doc(user.uid);

          docRef.get().then(function(doc) {
          if (doc.exists) {
            //this.fullname = doc.data().name;
            //this.phone = doc.data().phone;
            this.email = doc.data().email;
            //alert(doc.data().name);
          } else {
            
          }

      }).catch(function(error) {

      });

      } else {
        alert("Ninguem logado!!");
      }
  });
});

export default {
  name: "Profile",
  data() {
    return {
      fullname: '',
      phone: '',
      email: ''
    };
  },
  methods: {
    edit: function() {
        
    }
  }
};
</script>

<style scoped>
</style>