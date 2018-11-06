// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import axios from 'axios';
import Vuex from 'vuex';
import router from './router';
import VueLazyload from 'vue-lazyload';
import infiniteScroll from 'vue-infinite-scroll';
import currency from './util/format-currency';

import './assets/css/base.css'

Vue.use(VueLazyload, {
  loading: '/static/loading/loading-bars.svg'
});
Vue.use(infiniteScroll);

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    cartCount: 0,
    userName: ''
  },
  mutations: {
    updateName (state, userName) {
      state.userName = userName;
    },
    addCartCount (state, count) {
      state.cartCount += count;
    }
  }
});

Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.filter('currency', currency);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
