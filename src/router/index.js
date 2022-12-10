import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VerkaufView from '../views/VerkaufView.vue'
import HilfeView from '../views/HilfeView.vue'
import NeuesFahrradView from '@/views/NeuesFahrradView'
import BikeView from '@/views/BikeView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
    component: HilfeView
  },
  {
    path: '/einkauf/fahrrad',
    name: 'fahrrad',
    component: BikeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
