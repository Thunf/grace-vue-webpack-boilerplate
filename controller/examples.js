'use strict';
exports.index = function*() {
  yield this.bindDefault()

  yield this.render('examples', {
    siteInfo: Object.assign({}, this.siteInfo, {
      title: '实例展示'
    })
  })
}
