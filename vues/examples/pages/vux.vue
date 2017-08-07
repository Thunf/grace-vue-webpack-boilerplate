<template>
  <div id="vux">

    <swiper auto loop :height="swiperHeight" :show-dots="swiperShowDots" dots-position="center">
      <swiper-item>
        <img class="swiper-image" width="100%" src="~image/logo.png"/>
      </swiper-item>
      <swiper-item v-for="item in swiperList" :key="item">
        <img class="swiper-image" width="100%" :src="item"/>
      </swiper-item>
    </swiper>

    <divider>
      <countup :start-val="0" :end-val="4500" :duration="1" :start="countupStart"></countup>
    </divider>
    
    <button @click="getPageData">点击试试</button>

    <template v-if="resList.length > 0">
      <div v-for="item in resList" :key="item"> {{item}} </div>
    </template>
    <load-more v-else tip="等待加载"></load-more>

  </div>
</template>

<script>
import Http from 'components/libs/http.js'

export default {
  mixins: [Http],
  data () {
    return {
      swiperList: [],
      swiperRadio: 330 / 750,
      countupStart: false,
      resList: []
    }
  },
  computed: {
    swiperShowDots () {
      return this.swiperList.length > 0
    },
    swiperHeight () {
      // 取兼容宽度
      const width = Math.min.apply(null, [
        // index.vue里做了640屏宽的限制
        640,
        window.screen.width,
        window.screen.availWidth
      ])
      return `${this.swiperRadio * width}px`
    }
  },
  mounted () {
  },
  methods: {
    getPageData () {
      this.$get(`/ajax/test/${new Date()}`, ({ code, data }) => {
        const _this = this
        this.$log(data.text)
        this.resList.push(data.text)
        this.countupStart = true
        const image = window.document.querySelector('.swiper-image')
        this.swiperList.push(image && image.src)
        this.$vux.alert.show({
          title: 'hello',
          onShow () {
            _this.$info('alert show')
            _this.showConfirm()
          },
          onHide () {
            _this.$error('alert hide')
            setTimeout(() => {
              _this.$vux.toast.text(_this.$space('Alert已关闭'), 'bottom')
            }, 500)
          }
        })
      })
    },
    showConfirm () {
      const _this = this
      this.$vux.confirm.show({
        title: 'Hello',
        content: 'World !',
        confirmText: 'Yes',
        cancelText: 'No',
        onConfirm () {
          _this.$info('confirm !')
        }
      })
    }
  }
}
</script>

<style lang="less">
#vux{
  .swiper-image{
    background: #fff;
    transform: translateY(-8%);
  }
}
</style>
