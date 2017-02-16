// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var projectRoot = path.resolve(__dirname, '../..'),
    graceRoot = path.resolve(projectRoot, '../..');

/**
 * Check for server folder & get its path
 * @value graceServer 
 * @params serverRoot
 * @params serverConf
 */
var graceServer = require('../check-server')(graceRoot)

var baseConf = {
      // Get module name automatically OR set manually
      moduleName: path.basename(projectRoot),
      projectRoot: projectRoot,
      serverRoot: graceServer.serverRoot,
      serverConf: graceServer.serverConf,
      outputRoot: path.resolve(graceServer.serverRoot, path.relative(graceRoot, projectRoot)),
      entryTemplate: path.resolve(projectRoot, 'views/_common/_template.ejs')
    },
    buildConf = {
      env: require('./prod.env'),
      assetsRoot: baseConf.outputRoot,
      assetsPublicPath: path.resolve('/', baseConf.moduleName) + '/',
      assetsSubDirectory: 'static',
      productionSourceMap: false || !!process.env.npm_config_map
    },
    devConf = {
      env: require('./dev.env'),
      assetsRoot: baseConf.outputRoot,
      assetsPublicPath: path.resolve('/', baseConf.moduleName) + '/',
      assetsSubDirectory: 'static',
      autoOpenBrowser: true,
      autoOpenDelay: 2000
    };

module.exports = {
  build: buildConf,
  base: baseConf,
  dev: devConf
}
