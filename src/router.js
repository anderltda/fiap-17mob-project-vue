import Vue from 'vue'
import firebase from "firebase";
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'

Vue.use(Router)

const router = new Router({
    routes: [{
            path: '*',
            redirect: 'login'
        },
        {
            path: '/',
            redirect: 'login'
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            beforeEnter: (to, from, next) => {
                const currentUser = firebase.auth().currentUser;
                if (!currentUser) {
                    next('error');
                } else {
                    next();
                }
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/signup',
            name: 'Signup',
            component: Signup
        },
        {
            path: '/error',
            name: 'Error',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/Error.vue')
        }
    ]
});

router.afterEach((to, from) => {

    var nav = document.getElementById("nav");

    const currentUser = firebase.auth().currentUser;

    if (currentUser) {

        if (nav) {
            nav.style.display = "block";
        }

    } else {

        if (nav) {
            nav.style.display = "none";
        }

    }
});

export default router;