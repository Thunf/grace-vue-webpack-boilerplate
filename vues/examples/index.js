/* eslint-disable no-new */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './router.js'
import App from './index.vue'

/**
 * 引入各种第三方组件，优点：
 * 1、按需引用（减少不必要的组件引用）
 * 2、统一管理（不用每个vue都import）
 */
// vux
import vux from './components/vux'
// iview
import './components/iview/index.less'
import iView from './components/iview'

// 初始化路由
const router = new VueRouter(routes)
router.beforeEach((to, from, next) => {
  const title = to && to.meta && to.meta.title
  const titleDom = title && window.document.querySelector('title')
  if (titleDom) {
    titleDom.text = title
  }
  // 确保一定要调用 next()
  next()
})

// 置入组件
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(iView)
Vue.use(vux)

new Vue({
  /**
   * 提供的元素只能作为挂载点。
   * 不同于 Vue 1.x，所有的挂载元素会被 Vue 生成的 DOM 替换。
   * 因此不推荐挂载root实例到 <html> 或者 <body> 上。
   */
  el: '#app',
  template: '<App/>',
  components: { App },
  /**
   * 置入路由
   */
  router
})
/* eslint-enable no-new */
