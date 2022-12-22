import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VerkaufView from '../views/VerkaufView.vue'
import HilfeView from '../views/HilfeView.vue'
import NeuesFahrradView from '@/views/NeuesFahrradView'
import BikeView from '@/views/BikeView'
import { LoginCallback, navigationGuard } from '@okta/okta-vue'

import LoginComponent from '@/views/Login'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },


  {
    path: '/login',
    component: LoginComponent
  },
  {
    path: '/login/callback',
    component: LoginCallback
  },


  {
    path: '/verkauf',
    name: 'verkauf',
    component: VerkaufView
  },
  {
    path: '/verkauf/neues_fahrrad',
    name: 'neues_fahrrad',
    component: NeuesFahrradView
  },
  {
    path: '/hilfe',
    name: 'hilfe',
    component: HilfeView,
    meta: {
      requiresAuth: true
    }


  },
  {
    path: '/einkauf/fahrrad',
    name: 'fahrrad',
    component: BikeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach(navigationGuard)
export default router

