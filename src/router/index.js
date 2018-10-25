import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/views/goods-list/goods-list'
import Cart from '@/views/cart/cart'
import Address from '@/views/address/shipping-address'
import OrderConfirm from '@/views/order-confirm/order-confirm'

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
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/order',
      name: 'OrderConfirm',
      component: OrderConfirm
    }
  ]
})
