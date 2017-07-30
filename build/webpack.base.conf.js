var path = require('path')
var shell = require('shelljs')
var utils = require('./utils')
var config = require('./config')
var webpack = require('webpack')
var vueLoaderConfig = require('./vue-loader.conf')
var CopyWebpackPlugin = require('copy-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

/**
 * [entries 入口合成器]
 * @param  {object} opt 指定的入口，优先级高于自动抓取入口
 * @return {object}     返回合成的入口对象
 */
function entries (opt) {
  // cd vues
  shell.cd('./vues');

  var ens = shell.ls().map(function(item) {
    var obj = {};
    // 将忽略所有以下划线“_”开头的文件夹
    if (!/^_[\w-]+$/.test(item)) {
      obj[item] = './vues/'+item+'/';
    }
    return obj;
  });

  // have to return dir
  shell.cd('..');

  return Object.assign.apply(null, [].concat(ens, opt));
}

module.exports = {
  entry: entries({
    // 此处可以手动指定其他需打包的页面/文件入口
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
      /* ==================== eslint =================== */ 
      /* If eslint makes you mad, just delete these code */
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [resolve('vues'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      /* ================== eslint end ================= */
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('vues'), resolve('test')],
        exclude: [resolve('node_modules')]
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
    // webpack3 - scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    // copy files
    new CopyWebpackPlugin([
      { from: { glob: './controller/**/*' }, to: `${config.base.outputRoot}`},
      { from: { glob: './deploy/**/*' }, to: `${config.base.outputRoot}` },
      { from: { glob: './mock/**/*' }, to: `${config.base.outputRoot}` },
      { from: { glob: './views/**/!(_*)' }, to: `${config.base.outputRoot}` },
      { from: { glob: './static/**/!(_*)' }, to: `${config.base.outputRoot}` }
    ])
  ]
}
