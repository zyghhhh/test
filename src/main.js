import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

// Vue.config.productionTip = false

import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"

new Vue({
 
  render: h => h(App),
  router
}).$mount('#app')
