'use strict';
exports.index = function*() {
  yield this.bindDefault()

  yield this.render('third_party_library', {
    siteInfo: Object.assign({}, this.siteInfo, {
      title: '第三方组件库使用示例'
    })
  })
}
