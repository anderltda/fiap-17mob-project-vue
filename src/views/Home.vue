<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
     <b-button @click="logout" variant="primary" class="px-5">LogOut</b-button>
  </div>
</template>

<script>
import firebase from "firebase";
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    logout: function() {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login');
        })
    }
  }
}
</script>
