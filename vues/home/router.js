module.exports = {
  routes: [{
    path: '/start',
    name: 'start',
    component: require('components/start.vue')
  }, {
    path: '*',
    redirect: '/start'
  }]
}
