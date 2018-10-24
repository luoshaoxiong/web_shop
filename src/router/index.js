import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/views/goods-list/goods-list'
import Cart from '@/views/cart/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/goods',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
