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
          component: Home,
          meta: {
            label: "权限管理"
          },
        }, {
          path: '/menu', //menu
          name: 'menu',
          component: () => import("@/views/menu/Menu.vue"),
        },
        {
          path: '/shoppingcart', //shoppingcart
          name: 'shoppingcart',
          component: () => import("@/views/shoppingcart/Shoppingcart.vue"),
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
      path: '/signin',
      name: 'signin',
      component: () => import("../views/toSignIn/toSignIn.vue"),
    },
    {
      path: '/forgotpasswrod',
      name: 'forgotpasswrod',
      component: () => import("../views/toSignIn/ForgotPassword.vue"),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import("../views/toSignIn/SignUp.vue"),
    },
    {
      path: '/setaccount',
      name: 'setaccount',
      component: () => import("../views/toSignIn/SetAccount.vue"),
    }, {
      path: '/userinfo',
      name: 'userinfo',
      component: () => import("../views/toSignIn/UserInfo.vue")
    }, {
      path: '/birthday',
      name: 'birthday',
      component: () => import("../views/toSignIn/Birthday.vue")
    }, {
      path: '/detailsOfDishes',
      name: 'detailsOfDishes',
      component: () => import("../views/detailsOfDishes/DetailsOfDishes.vue")
    },
    {
      path: '/search',
      name: 'search',
      component: () => import("../views/searchpage/Search.vue")
    }, {
      path: '/evaluate',
      name: 'evaluate',
      component: () => import("../views/evaluate/Evaluate.vue")
    }, {
      path: '/modifyname',
      name: 'modifyname',
      component: () => import("../views/toSignIn/ModifyName.vue")
    }, {
      path: '/modifyphonenumber',
      name: 'modifyphonenumber',
      component: () => import("../views/toSignIn/ModifyPhoneNumber.vue")
    }, {
      path: '/modifyautograph',
      name: 'modifyautograph',
      component: () => import("../views/toSignIn/Modifyautograph.vue")
    }, {
      path: '/orderdata',
      name: 'orderdata',
      component: () => import("../views/toSignIn/OrderData.vue")
    }, {
      path: '/modifyhobby',
      name: 'modifyhobby',
      component: () => import("../views/toSignIn/ModifyHobby.vue")
    }, {
      path: '/safcenter',
      name: 'safcenter',
      component: () => import("../views/toSignIn/SafCenter.vue")
    }, {
      path: '/switchaccountnumber',
      name: 'switchaccountnumber',
      component: () => import("../views/toSignIn/SwitchAccountNumber.vue")
    }, {
      path: '/feedback',
      name: 'feedback',
      component: () => import("../views/toSignIn/Feedback.vue")
    }, {
      path: '/modifypassword',
      name: 'modifypassword',
      component: () => import("../views/toSignIn/ModifyPassword.vue")
    }, {
      path: '/collection',
      name: 'collection',
      component: () => import("../views/toSignIn/Collection.vue")
    }, {
      path: '/order',
      name: 'order',
      component: () => import("../views/toSignIn/Order.vue")
    }, {
      path: '/turntable',
      name: 'turntable',
      component: () => import("../views/toSignIn/Turntable.vue")
    }, {
      path: '/wholeorder',
      name: 'wholeorder',
      component: () => import("../views/toSignIn/WholeOrder.vue")
    }, {
      path: '/orderDetails',
      name: 'orderDetails',
      component: () => import("../views/orderDetails/OrderDetails.vue")
    }, {
      path: '/addressedit',
      name: 'addressedit',
      component: () => import("../views/orderDetails/AddressEdit.vue")
    }, {
      path: '/modifyAddress',
      name: 'modifyAddress',
      component: () => import("../views/orderDetails/ModifyAddress.vue")
    }, {
      path: '/map',
      name: 'map',
      component: () => import("../views/orderDetails/Map.vue")
    }, {
      path: '/payment',
      name: 'payment',
      component: () => import("../views/payment/Payment.vue")
    }, {
      path: '/modifysex',
      name: 'modifysex',
      component: () => import("../views/toSignIn/ModifySex.vue")
    }
  ],
})
// 导航守卫，路由守卫，路由拦截
// router.beforeEach((to,from,next)=>{
// 验证token，只有存在token的时候 ，才能跳转到内容页
// console.log(to);
// console.log(from);
// let token = localStorage.getItem('token');
// if (token || to.path === '/signin') {
// next();
// console.log(token);
//   }else{
//     next("/signin")
//   }

// })

export default router
