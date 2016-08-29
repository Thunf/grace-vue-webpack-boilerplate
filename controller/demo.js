'use strict';

exports.index = function*() {
    yield this.bindDefault();

    yield this.render('demo', {
        siteInfo: this.siteInfo
    });
}
