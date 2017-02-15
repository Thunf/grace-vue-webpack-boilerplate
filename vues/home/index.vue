<template>
  <div id="home">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="less">
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
