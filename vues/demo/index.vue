<template>
  <div id="demo">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'demo'
}
</script>

<style lang="less">
@import '~static/fonts/iconfont.css';

h1 {
  line-height: 3;
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 300%;
  font-weight: normal;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconfont{
  font-size: inherit;
}

</style>
