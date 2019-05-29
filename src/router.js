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
            path: '*/',
            redirect: 'login'
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
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
            path: '/about',
            name: 'About',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
});

router.beforeEach((to, from, next) => {

    var nav = document.getElementById("nav");

    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    //console.log(currentUser);
    //console.log(requiresAuth);

    if (currentUser) {
        //   next({ path: '/home' })
        nav.style.display = "block";
    } else {

        //nav.style.display = "none";
        // next({ path: '/login' })
    }

    //if (requiresAuth && !currentUser) next('login');
    //else if (!requiresAuth && currentUser) next('home');
    //else next();
    next();
});

export default router;