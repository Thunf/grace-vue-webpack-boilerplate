<template>
  <div id="home">
    <router-view>
      <grace></grace>
    </router-view>
  </div>
</template>

<script>
import Grace from 'components/grace.vue'

export default {
  name: 'home',
  components: {
    Grace
  }
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
