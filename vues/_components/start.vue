<template>
  <div id="demo">
    <!-- Same effect, but alias write less -->
    <img class="logo" src="../../static/image/logo-grace.png" width="50%">
    <img class="logo" src="~image/logo.png">
    <h1>
      Welcome to start your Vue2 app <br> with Koa-grace! 
      <i class="iconfont icon-Expression_"></i>
    </h1>
    <p>
      Examples: 
      <a href="/demo">simple demo</a>、
      <a :href="page404">404Page</a>
      <br>
      <a href="/vuex">examples with vuex</a>、
      <br>
      <a href="/history">examples with history mode</a>、
      <br>
      <a href="/async_components">examples with async components</a>、
      <br>
      <a href="/third_party_library">examples with third-party components</a>
    </p>
    <p>
      To get a better understanding of how this boilerplate works, 
      <br> check out 
      <a href="http://vuejs-templates.github.io/webpack" target="_blank">its documentation</a>.
    </p>
    <p>
      It is also recommended to go through the docs 
      <br> for
      <a href="http://webpack.github.io/" target="_blank">Webpack</a> and
      <a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>. 
    </p>
    <p>
      If you have any issues with the setup, 
      <br> please file an issue at this boilerplate's 
      <a href="https://github.com/Thunf/grace-vue-webpack-boilerplate" target="_blank">repository</a>.
    </p>

    <slot></slot>

    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Vue Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <br> 
    <br> 
    <br> 

  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'demo'
    }
  },
  computed: {
    page404 () {
      return `/${Math.random().toString(36).substring(2, 6)}`
    }
  }
}
</script>

<style lang="less">
@import '~static/fonts/iconfont.css';
/* some less */

#demo{
  max-width: 640px;
  margin: auto;

  .logo{
    max-width: 200px;
    vertical-align: middle;

    &+ .logo{
      max-width: 160px;
    }
  }

  .iconfont{
    font-size: inherit;
  }
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
