module.exports = {
  routes: [{
    path: '/',
    name: 'async_components',
    component: () => import(/* webpackChunkName: "async_index" */ './pages/index.vue')
  }, {
    path: '*',
    redirect: '/'
  }]
}
