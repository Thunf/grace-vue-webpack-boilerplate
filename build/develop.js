require('./check-versions')()
var config = require('./config')
var pristine = true

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var ora = require('ora')
var path = require('path')
var chalk = require('chalk')
var shell = require('shelljs')
var webpack = require('webpack')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

var spinner = ora('building for development...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
shell.rm('-rf', assetsPath)
shell.mkdir('-p', assetsPath)
shell.config.silent = true
shell.cp('-R', 'static/*', assetsPath)
shell.config.silent = false

// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
var autoOpenDelay = config.dev.autoOpenDelay

webpack(webpackConfig, function (err, stats) {

  // when env is testing, don't need open it
  if (pristine && process.env.NODE_ENV !== 'testing') {
    require('./open-browser')(autoOpenBrowser, autoOpenDelay)
  }

  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  console.log(chalk.cyan('\n  Build complete.\n'))
  pristine && console.log(chalk.yellow(
    '  Tip: built files are meant to be served over Koa-grace server.\n' +
    '  Opening index.html over file:// won\'t work.',
    (function(){pristine = false})() || ''
  ))
})

