'use strict';

/**
 * ['/history/page']
 * The path used by history mode
 */
exports.page = function*() {
  yield this.bindDefault()

  yield this.render('history', {
    siteInfo: this.siteInfo
  })
}
/**
 * Match all path (begins with '/history/page/').
 * Such as: /history/page/:any-words/:any-times/...
 */
exports.page.__regular__ = /^\/history\/page\/(?:.*)(?:\/(?=$))?$/

/**
 * ['/history' & '/history/page']
 * Make the index path redirect to history path automatically
 */
exports.index = exports.page

/**
 * ['/history/ajax']
 * Other paths to do other things
 */
exports.ajax = {
  demo: function*() {
    yield this.proxy(`http://${this.host}/ajax/test/1`)
  }
}
