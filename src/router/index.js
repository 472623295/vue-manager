import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入login.vue模板对象'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Users from '../components/users/User.vue'
import Welcome from '../components/Welcome.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login, name: 'login' },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/users', component: Users }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  // to将要访问的路由
  // from从哪个路由转过来的
  // next执行下一个操作
  if (to.path === '/login') { // 如果要访问的是login那么就执行下一步操作
    return next()
  }
  // 如果不是login,则判断你当前是不是登录的状态,即token
  const token = window.sessionStorage.getItem('token')
  // 如果没有获取到token值那么就强制跳转到login界面
  if (!token) return next('/login')
  // 如果拿到了就放行
  next()
})
export default router
