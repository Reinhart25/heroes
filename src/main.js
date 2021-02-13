import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 引入所需要的样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// 你可以指定将被用在各个请求的配置默认值
axios.defaults.baseURL = 'http://localhost:3001/'

// axios 统一引入 -> this.axios
Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
