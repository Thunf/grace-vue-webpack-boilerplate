<template>
  <div class="async_components">

    <h1>{{status}}</h1>

    <demo v-if="showDemo"></demo>

    <div v-for="item in list" class="wrapper">
      <div>{{item}}: {{getComponentName(item)}}</div>
      <component :is="getComponentName(item)"></component>
    </div>
  </div>
</template>

<script>
import _async from '../components/index.js'

export default {
  name: 'async_components',
  components: _async(),
  data () {
    return {
      status: 'Waiting',
      showDemo: 0,
      list: []
    }
  },
  mounted () {
    this.status = 'Waiting demx...'
    setTimeout(() => {
      this.showDemo = 1
      this.list.push('demx')
      this.status = 'Waiting demo...'
    }, 3000)
    setTimeout(() => {
      this.list.push('demo')
      this.status = 'Waiting any-no-exist-module...'
    }, 4000)
    setTimeout(() => {
      this.list.push('any-no-exist-module')
      this.status = 'Done!'
    }, 5000)
  },
  methods: {
    isComponentExist (name) {
      return this.constructor.component(name)
    },
    getCamelCase (name) {
      return name.replace(/^([a-z])|-([a-z])/g, (str) => {
        return str.toUpperCase().replace('-', '')
      })
    },
    getComponentName (name) {
      return this.isComponentExist(name) ? name : (() => {
        const camel = this.getCamelCase(name)
        return this.isComponentExist(camel) ? camel : 'empty'
      })()
    }
  }
}
</script>

<style lang="less">
.wrapper{
  padding: 0.5em 0.7em;
  margin: 1em 0;
  border: 1px solid red;
}
</style>
