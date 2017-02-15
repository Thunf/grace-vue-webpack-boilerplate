// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var merge = require('webpack-merge')
var projectRoot = path.resolve(__dirname, '../..')

var baseConf = {
      // Get module name automatically OR set manually
      moduleName: path.basename(path.resolve(__dirname, '../..')),
      projectRoot: projectRoot,
      outputRoot: (function(){
        var arr = projectRoot.split('/'); 
        arr.splice(-2, 0, 'server'); 
        return arr.join('/') 
      })(),
      entryTemplate: path.resolve(projectRoot, 'views/_common/_template.ejs')
    },
    buildConf = {
      env: require('./prod.env'),
      assetsRoot: baseConf.outputRoot,
      assetsPublicPath: path.resolve('/', baseConf.moduleName) + '/',
      assetsSubDirectory: 'static',
      productionSourceMap: !!process.env.npm_config_map
    },
    devConf = {
      env: require('./dev.env'),
      assetsRoot: baseConf.outputRoot,
      assetsPublicPath: path.resolve('/', baseConf.moduleName) + '/',
      assetsSubDirectory: 'static',
      autoOpenBrowser: true
    };

module.exports = {
  build: buildConf,
  base: baseConf,
  dev: devConf
}
