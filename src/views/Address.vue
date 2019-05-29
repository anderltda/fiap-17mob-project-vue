
<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <h1>Address</h1>
                  <p class="text-muted">Update your address</p>
                  <b-input-group class="mt-3">
                    <b-form-input
                      v-model="cep"
                      type="number"
                      class="form-control"
                      placeholder="CEP"
                      autocomplete="name"
                    />
                    <b-input-group-append>
                      <b-button variant="primary">Search</b-button>
                    </b-input-group-append>
                  </b-input-group>

                  <b-input-group class="mt-3">
                    <b-form-input
                      v-model="cep"
                      type="text"
                      class="form-control"
                      placeholder="Logradouro"
                      autocomplete="name"
                    />
                  </b-input-group>                  


                  <b-input-group class="mt-3">
                    <b-col cols="12">
                      <b-button @click="edit" variant="primary" class="px-5">Save</b-button>
                    </b-col>
                   </b-input-group>
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
        alert("Ninguem logado!! address.html");
      }
  });
});

export default {
  name: "Address",
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