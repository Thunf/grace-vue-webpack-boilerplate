'use strict';

const path = require('path')

const mod = 'grace_boilerplate';
const app = path.resolve(__dirname, `../../../server/app/${mod}`);

module.exports = {
  build: {
    // app
    mod: mod,
    app: app,

    // 模块列表
    modules: path.resolve(__dirname, '../vues/*'),
    modulesEscape:['assets','components','common'],
    // 源HTML路径
    viewsEntry: { 
      default: './views/common/layout.html' 
    },
    // 产出HTML的目录
    viewsOutput: `${app}/views/module/`,
    // 静态文件目录，即dist目录
    assetsRoot: `${app}/static`,
    // 静态文件， 前缀
    assetsPublicPath: `{{constant.cdn}}/${mod}/static/`,
    // 是否生成sourceMap
    productionSourceMap: true
  }
}
