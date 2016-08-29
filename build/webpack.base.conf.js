var path = require('path')
var config = require('./config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'static': path.resolve(__dirname, '../static'),
      'components': path.resolve(__dirname, '../vues/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    /*preLoaders: [{
      test: /\.vue$/,
      loader: 'eslint',
      include: projectRoot,
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      loader: 'eslint',
      include: projectRoot,
      exclude: /node_modules/
    }],*/
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel',
      include: projectRoot,
      exclude: /node_modules/,
      query: {
        "presets": ['es2015', "stage-2"],
        "plugins": ["transform-runtime"],
        "comments": false
      }
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.html$/,
      loader: 'vue-html'
    }]
  },
  vue: {
    loaders: utils.cssLoaders()
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './controller', to: `${config.build.app}/controller` },
      { from: './model', to: `${config.build.app}/model` },
      { from: './deploy', to: `${config.build.app}/deploy` },
      { from: './mock', to: `${config.build.app}/mock` }
    ])
  ]
}
