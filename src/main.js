import Vue from 'vue'
import App from './App.vue'

import {store} from './store/store';
import {router} from './route/route';

Vue.config.productionTip = false

new Vue({
  store,
  router ,
  render: h => h(App),
}).$mount('#app')
