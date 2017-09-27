/* 项目启动 */
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import $ from 'jquery'

new Vue({
  router: router,
  render: h => h(App)
  // components: { firstcomponent, secondcomponent }

}).$mount('#app')
