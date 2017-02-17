'use strict'

// 接口示例：proxy转发
exports.demo = function*() {
  // 此处示例：通过node，并发请求其他API
  // 假设我们访问koa-grace服务自己的其他API，接口见下文
  yield this.proxy({
    test1: `http://${this.host}/ajax/test/1`,
    test2: `http://${this.host}/ajax/test/2`,
    test3: `http://${this.host}/ajax/test/3`,
    // 顺便请求一下作者的github信息
    thunf: `github_api:users/thunf`
  })

  // 假装处理数据
  this.backData.grace = Object.assign({
    html_url: 'https://github.com/Thunf',
    grace: 'http://7xrhcw.com1.z0.glb.clouddn.com/grace-qq.png'
  }, this.backData.thunf)

  this.body = this.backData
}

// 接口示例：静态数据
exports.test = function*() {
  // 配置header, 此处示例如何允许跨域
  this.set('Access-Control-Allow-Origin', this.headers.origin)
  this.set('Access-Control-Allow-Methods', 'POST, GET')
  this.set('Access-Control-Allow-Headers', 'content-type')

  // 接收参数
  let _text = this.params.text

  // 返回数据
  this.body = {
    code: 0,
    data: {
      text: `test data: ${_text}`
    },
    message: 'success'
  }
}
exports.test.__regular__ = '/:text'
