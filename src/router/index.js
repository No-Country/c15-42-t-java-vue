import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarritoCompras from '../views/CarritoCompras.vue'
import CategoriesView from '../views/CategoriesView.vue'
import PlantsView from '../views/PlantsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoriesView
    },
    {
      path: '/categories/:id',
      name: 'plants',
      component: PlantsView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CarritoCompras
    }


   
    ]
})

export default router
