export function configRouter (router) {
  router.map({
    '/index': {
      component: require('./demo.vue')
    }
  })

  router.redirect({
    '*': '/index'
  })
}
