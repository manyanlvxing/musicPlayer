import Vue from 'vue'
import App from './App.vue'

import {store} from './store/store';
import {router} from './route/index';

Vue.config.productionTip = false;

import '../css/global.css';

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
