import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Test from '../views/Test.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Test
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
