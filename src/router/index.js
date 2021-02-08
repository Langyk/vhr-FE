import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
Vue.use(Router)

export default new Router({
    routes : [
        {
            path: '/',
            name: 'Login',
            component: Login,
            hidden:true
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            hidden:true
        }
    ]
})

// const routes = [
//     {
//         path: '/',
//         name: 'Home',
//         component: Home
//     },
//     {
//         path: '/about',
//         name: 'About',
//         // route level code-splitting
//         // this generates a separate chunk (about.[hash].js) for this route
//         // which is lazy-loaded when the route is visited.
//         component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//     }
// ]
//
// const router = new Router({
//     routes
// })
//
// export default router