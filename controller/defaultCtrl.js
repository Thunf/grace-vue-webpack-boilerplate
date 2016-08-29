'use strict';

module.exports = function*() {

    // 网站信息
    this.siteInfo = { 
        title: 'demo',
        path: this.path,
        url: this.request.url,
        href: this.request.href,
        year: new Date().getFullYear(),
    }

}

// 设置为非路由
module.exports.__controller__ = false;