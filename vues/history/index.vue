<template>
  <div id="history">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'history',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  methods: {
    fromTo (from, to) {
      return (f, t) => {
        return t.test(to.path) && f.test(from.path)
      }
    }
  },
  watch: {
    $route (to, from) {
      const fromTo = this.fromTo(from, to)
      this.transitionName = [
        fromTo(/\/index/, /\/list/),
        fromTo(/\/list/, /\/test/),
        fromTo(/\/test/, /\/test\/\w+/),
        fromTo(/\/test\/\w+/, /\/index/)
      ].reduce((a, b) => a || b) ? 'slide-left' : 'slide-right'
    }
  }
}
</script>

<style lang="less">
#history{
  .child-view {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    transition: all 0.8s cubic-bezier(0.55, 0, 0.1, 1);
  }
  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transform: translate(50px, 0);
  }
  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    transform: translate(-50px, 0);
  }
}
</style>
