import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import ProdutosView from '../views/Produtos.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: ProdutosView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
