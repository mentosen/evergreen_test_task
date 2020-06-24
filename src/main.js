import Vue from 'vue'
import App from './App.vue'

import '@/assets/styles.scss';
import Paginate from 'vuejs-paginate'
import VueRouter from 'vue-router'
import Vuex from 'vuex';

import router from '@/router';
import store from '@/store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

Vue.component('paginate', Paginate);

Vue.use(VueRouter);
Vue.use(Vuex);