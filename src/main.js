import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入样式
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
