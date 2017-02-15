var path = require('path')
var utils = require('./utils')
var config = require('./config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = merge(utils.setEntrys(baseWebpackConfig), {
  watch: true,
  module: {
    rules: utils.styleLoaders({ 
      sourceMap: config.dev.cssSourceMap
    })
  },
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name]/build.js?[chunkhash:10]'),
    chunkFilename: utils.assetsPath('js/[id]/chunk.js?[chunkhash:10]')
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin()
  ]
})
