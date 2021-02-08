import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Test1 from '../views/Test1.vue'
import Test2 from '../views/Test2.vue'
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
        },
        {
            path: '/home',
            name: '导航一',
            component: Home,
            children: [
                {
                    path: '/test1',
                    name: '选项1',
                    component: Test1
                },
                {
                    path: '/test2',
                    name: '选项2',
                    component: Test2
                }
            ]
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