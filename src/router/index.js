import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReportView from '@/views/ReportView.vue'
import OrderView from '@/views/OrderView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/report',
    name: 'report',
    component: ReportView
  },
  {
    path: '/order',
    name: 'order',
    component: OrderView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/stock',
    name: 'stock',
    component: ()=> import('../views/StockReport.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: ()=> import('../views/UserView.vue')
  },
  {
    path: '/expenses',
    name: 'expenses',
    component: ()=> import('../views/ExpensesView.vue')
  },
  {
    path: '/single',
    name: 'single',
    component: ()=> import('../views/SingleView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: ()=> import('../views/ProductsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
