var path = require('path')
var utils = require('./utils')
var config = require('./config')
var vueLoaderConfig = require('./vue-loader.conf')
var CopyWebpackPlugin = require('copy-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

function exec (cmd) {
  return require('child_process').execSync(cmd).toString().trim()
}

function entries (opt) {
  return Object.assign.apply(null, [].concat(exec('cd ./vues && ls').split('\n').map(function(item) {
    var obj = {};
    if (!/^_[\w-]+$/.test(item)) {
      obj[item] = './vues/'+item+'/'
    }
    return obj
  }), opt))
}

module.exports = {
  entry: entries({
    // folderName: './vues/folderName'
    common: [
      './static/css/common/reset.less',
      './static/css/common/index.less',
      './static/js/common/hello.js',
    ]
  }),
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name]/build.js?[hash:7]'),
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [
      resolve('vues'),
      resolve('static'),
      resolve('node_modules')
    ],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'vues': resolve('vues'),
      'static': resolve('static'),
      'image': resolve('static/image'),
      'components': resolve('vues/_components')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [resolve('vues'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('vues'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1024 * 8,
          name: utils.assetsPath('image/[name].[ext]?[hash:10]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1024 * 8,
          name: utils.assetsPath('fonts/[name].[ext]?[hash:10]')
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: { glob: './controller/**/*' }, to: `${config.base.outputRoot}`},
      { from: { glob: './deploy/**/*' }, to: `${config.base.outputRoot}` },
      { from: { glob: './mock/**/*' }, to: `${config.base.outputRoot}` },
      { from: { glob: './views/**/!(_*)' }, to: `${config.base.outputRoot}` },
      { from: { glob: './static/**/!(_*)' }, to: `${config.base.outputRoot}` }
    ])
  ]
}
