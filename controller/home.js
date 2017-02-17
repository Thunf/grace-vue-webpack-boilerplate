'use strict'

exports.index = function*() {
  yield this.bindDefault()

  yield this.render('home', {
    siteInfo: this.siteInfo
  })
}
