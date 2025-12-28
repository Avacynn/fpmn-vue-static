import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/mora', component: () => import('./views/Apartment.vue'), props: { city: 'mora' } },
  { path: '/pinecity', component: () => import('./views/Apartment.vue'), props: { city: 'pinecity' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
