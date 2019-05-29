import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import store from './store'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false;

let app = '';

firebase.initializeApp({
    apiKey: "AIzaSyA-IkyIQVL9bdLAPyDQL2KKxzEGbySvMok",
    authDomain: "messenger-32489.firebaseapp.com",
    databaseURL: "https://messenger-32489.firebaseio.com",
    projectId: "messenger-32489",
    storageBucket: "messenger-32489.appspot.com",
    messagingSenderId: "662383105600",
    appId: "1:662383105600:web:83cd95e840b796ff"
});

export const db = firebase.firestore();

Vue.use(BootstrapVue);

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            store,
            router,
            render: h => h(App)
        }).$mount('#app');
    }
});

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'