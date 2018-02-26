// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './router.js'
import store from './store'
import App from './index.vue'

// 置入组件
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)

// 初始化
/* eslint-disable no-new */
new Vue({
  /**
   * 提供的元素只能作为挂载点。
   * 不同于 Vue 1.x，所有的挂载元素会被 Vue 生成的 DOM 替换。
   * 因此不推荐挂载root实例到 <html> 或者 <body> 上。
   */
  el: '#app',
  // vuex store
  store: new Vuex.Store(store),
  template: '<App/>',
  components: { App },
  /**
   * 置入路由
   */
  router: new VueRouter(routes)
})
/* eslint-enable no-new */
