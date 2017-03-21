'use strict';
const glob = require('glob');
const path = require('path');
const fs = require('fs');
require('shelljs/global');

const controllerPath = path.resolve(__dirname, '../../controller/') + '/';
const srcPath = path.resolve(__dirname, '../../vues/') + '/';

let illegal = function (name) {
	return !/^[a-z0-9_]+?$/.test(name) || /^\d/.test(name)
}

let exist = function (name) {
	let controllers = glob.sync(controllerPath + '*.js').map(function (item) {
		return item.split('/').pop().replace('.js', '');
	});
	let srcModules = glob.sync(srcPath + '*').map(function (item) {
		return item.split('/').pop();
	});
	return controllers.concat(srcModules).indexOf(name) > -1;
}

let _autoMakeController = function (name) {
fs.writeFileSync(controllerPath + name + '.js', `'use strict';

exports.index = function*() {
    yield this.bindDefault();

    yield this.render('${ name }', {
        siteInfo: this.siteInfo
    });
}

`);
}

let _autoMakeEntryJs = function (name) {
let Name = name[0].toUpperCase() + name.slice(1);

fs.writeFileSync(srcPath + name + '/index.js', `// The Vue build version to load with the \`import\` command
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
`);
}

let _autoMakeEntryVue = function (name) {
fs.mkdirSync(srcPath + name + '/components');
fs.writeFileSync(srcPath + name + '/index.vue', `<template>
  <div id="${name}">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: '${name}',
  components: {
  }
}
</script>

<style lang="less">
</style>
`);

fs.writeFileSync(srcPath + name + '/components/'+name+'.vue', `<template>
  <div class="${name}">
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="less">
</style>
`);
}


let _autoMakeRouter = function (name) {
fs.writeFileSync(srcPath + name + '/router.js', `module.exports = {
  routes: [{
    path: '/',
    component: require('./components/${name}.vue')
  }, {
    path: '*',
    redirect: '/'
  }]
}
`);
}


let autoMake = function (useVue, name) {
	_autoMakeController(name);
	if (useVue) {
		mkdir('-p', srcPath + name)
		_autoMakeEntryJs(name);
		_autoMakeEntryVue(name);
		_autoMakeRouter(name);
	}
}

exports.illegal = illegal;
exports.exist = exist;
exports.autoMake = autoMake;
