import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Apartment from './views/Apartment.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/mora', component: Apartment, props: { city: 'mora' } },
  { path: '/pinecity', component: Apartment, props: { city: 'pinecity' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
