'use strict';

exports.index = function*() {
    yield this.bindDefault();

    yield this.render('module/home', {
        siteInfo: this.siteInfo
    });
}
