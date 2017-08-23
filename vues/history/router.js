const prefix = '/history/page'

function getDemoHtml (path) {
  return `<div>
    <a href="${prefix}${path}">
      &lt;a&gt; will Reload-The-Page as usual!
    </a>
    <br>
    <router-link to="${prefix}${path}">
      &lt;router-link&gt; use real History api!
    </router-link>
    <span style="color: red;">[use this!]</span>
  </div>`
}

module.exports = {
  mode: 'history',
  routes: [{
    path: `${prefix}/index`,
    component: {
      template: getDemoHtml('/list')
    }
  }, {
    path: `${prefix}/list`,
    component: {
      template: getDemoHtml('/test')
    }
  }, {
    path: `${prefix}/test`,
    component: {
      template: getDemoHtml(`/test/${Math.random().toString(36).substring(2)}`)
    }
  }, {
    path: `${prefix}/test/:test`,
    component: {
      template: getDemoHtml('/index')
    }
  }, {
    path: '*',
    redirect: `${prefix}/index`
  }]
}
