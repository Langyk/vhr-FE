import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(Router)

export default new Router({
    routes : [
        {
            path: '/',
            name: 'Login',
            component: Login
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