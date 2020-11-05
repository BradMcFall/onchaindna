import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/introduction',
    name: 'Introduction',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "introduction" */ '../views/Introduction.vue')
  },
  {
    path: '/sell',
    name: 'Sell',
    component: () => import(/* webpakChunkName: "sell" */ '../views/Sell.vue')
  }
// {
//    path: '/buy',
//    name: 'Buy',
//    component () => import(/* webpakChunkName: "buy" */ '../views/Buy.vue')
//  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
