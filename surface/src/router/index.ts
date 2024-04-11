import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import CustomerView from '@/views/customer/CustomerView.vue'
import ProductView from '@/views/product/ProductView.vue'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/customer',
      name: 'customer',
      component: CustomerView,
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView,
    }
  ]
})
