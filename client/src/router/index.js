import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'
import ProductListView from '../views/ProductListView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'
import AfterPaymentView from '../views/AfterPaymentView.vue'

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
      name: 'cart',
      component: CartView
    },
    {
      path: '/list',
      name: 'list',
      component: ProductListView
    },
    {
      path: '/after-payment',
      name: 'after-payment',
      component: AfterPaymentView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: PageNotFoundView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.access_token
  if (to.name === 'cart' && !isLogin) {
    next({name: 'home'})
  } else {
    next()
  }
})

export default router
