// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import axios from 'axios';
import router from './router';
import VueLazyload from 'vue-lazyload';
import infiniteScroll from 'vue-infinite-scroll';

import './assets/css/base.css'

Vue.use(VueLazyload, {
  loading: '/static/loading/loading-bars.svg'
});
Vue.use(infiniteScroll);

Vue.config.productionTip = false;
Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
