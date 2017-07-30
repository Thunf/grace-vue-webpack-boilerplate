module.exports = {
  routes: [{
    path: '/index',
    component: {
      template: `<div>
        <h1> Hello Examples !</h1>
        <router-link to="vux">go vux</router-link>
      </div>`
    }
  }, {
    path: '/vux',
    name: 'vux',
    meta: {
      title: 'vux组件'
    },
    component: require('./pages/vux.vue')
  }, {
    path: '*',
    redirect: '/index'
  }]
}
