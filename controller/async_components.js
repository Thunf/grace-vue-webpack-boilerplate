'use strict';
exports.index = function*() {
  yield this.bindDefault()

  yield this.render('async_components', {
    siteInfo: this.siteInfo
  })
}
