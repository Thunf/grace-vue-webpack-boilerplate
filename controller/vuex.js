'use strict';
exports.index = function*() {
  yield this.bindDefault()

  yield this.render('vuex', {
    siteInfo: this.siteInfo
  })
}
