// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'development'

var path = require('path')
var config = require('./config')
var webpack = require('webpack')
var webpackConfig = require('./webpack.dev.conf')

var assetsPath = path.join(config.build.assetsRoot)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/', assetsPath)

webpack(webpackConfig, function (err, stats) {
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
