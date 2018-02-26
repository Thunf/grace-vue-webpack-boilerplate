module.exports = {
  routes: [{
    path: '/index',
    component: require('./components/App.vue')
  }, {
    path: '*',
    redirect: '/index'
  }]
}
