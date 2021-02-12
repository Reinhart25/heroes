import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入所需要的样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
