import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarritoCompras from '../views/CarritoCompras.vue'
import ProductosPlantas from '../views/ProductosPlantas.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'carrito',
      component: CarritoCompras
    },
    {
      path: '/plantas',
      name: 'plantas',
      component: ProductosPlantas
    }
    ]
})

export default router
