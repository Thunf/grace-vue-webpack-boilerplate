module.exports = {
  routes: [{
    path: '/hello/:id',
    component: {
      template: `
        <h1> 
          Hello {{$route.params.id[0].toUpperCase() + $route.params.id.slice(1)}} !
          <i class="iconfont icon-Expression_15"></i>
        </h1>
      `
    }
  }, {
    path: '*',
    redirect: '/hello/world'
  }]
}
