import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import api from './api/index.js'
import apiUrl from './api/interface.js'
import './assets/sass/index.sass' // 引入自定义样式

Vue.config.productionTip = false
// 配置忽略所有ionic元素
Vue.config.ignoredElements = [/^ion-/]
// 挂载封装的axios
Vue.prototype.$http = api
// 挂载api地址
Vue.prototype.$interface = apiUrl

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
