import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

// 导入全局样式
import './assets/global.less'

import './plugins/element.js'
// 导入element-ui的样式
import 'element-ui/lib/theme-chalk/index.css'
// 导入字体文件
import './assets/fonts/iconfont.css'
// 导入axios
import axios from 'axios'
// 配置url
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 为了和vue练习所以放到原型对象上
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
