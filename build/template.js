'use strict';

module.exports = function(name) {

  var _ = [];

_.push(
/********************************************************
 * @controller 
 ********************************************************/
`'use strict';
exports.index = function*() {
  yield this.bindDefault()

  yield this.render('${name}', {
    siteInfo: this.siteInfo
  })
}
`,
/********************************************************
 * @vue.vue 模块入口模板
 ********************************************************/
`<template>
  <div id="${name}">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: '${name}'
}
</script>

<style lang="less">
#${name}{
  /* some style */
}
</style>
`,
/********************************************************
 * @vue.js 模块入口
 ********************************************************/
`// The Vue build version to load with the \`import\` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './router.js'
import App from './index.vue'

// 初始化路由
/* eslint-disable no-new */
const router = new VueRouter(routes)

// 置入组件
Vue.use(VueRouter)
Vue.use(VueResource)

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
`,
/********************************************************
 * @vue.router 模块路由
 ********************************************************/
`module.exports = {
  routes: [{
    path: '/index',
    component: {
      template: \`<h1> Hello ${name} !</h1>\`
    }
  }, {
    path: '*',
    redirect: '/index'
  }]
}
`);

  return {
    'controller': _[0],
    'vue.vue': _[1],
    'vue.js': _[2],
    'vue.router': _[3],
  };
}