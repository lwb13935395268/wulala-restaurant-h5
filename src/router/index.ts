import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
//默认导入
import Layout from "../views/composables/Layout.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Layout',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/', // Home
          name: '/',
          component: Home
        }, {
          path: '/map', //map
          name: 'map',
          component: () => import("../views/map/Map.vue")
        }, {
          path: '/shoppingCart',//shoppingCart
          name: 'shoppingCart',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          //路由的懒加载，型能好
          component: () => import('../views/shoppingCart/shoppingCart.vue')
        },
        {
          path: '/mine', //mien
          name: 'mine',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/mine/Mine.vue')
        },
      ]
    },
    {
      path:'/toSignUp',
      name:'toSignUp',
      component:()=> import("../views/toSignUp/toSignUp.vue"),
    }
  ],
})

export default router
