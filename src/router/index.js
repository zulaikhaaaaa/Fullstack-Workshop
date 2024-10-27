import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeVIew.vue'
import SignIn from '../views/SignIn.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/SignIn', component: SignIn },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;