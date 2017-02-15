var path = require('path')
var config = require('./config')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}
  // generate loader string to be used with extract text plugin
  function generateLoaders (loaders) {
    var sourceLoader = loaders.map(function (loader) {
      var extraParamChar
      if (/\?/.test(loader)) {
        loader = loader.replace(/\?/, '-loader?')
        extraParamChar = '&'
      } else {
        loader = loader + '-loader'
        extraParamChar = '?'
      }
      return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '')
    }).join('!')

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: sourceLoader,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader', sourceLoader].join('!')
    }
  }

  // http://vuejs.github.io/vue-loader/en/configurations/extract-css.html
  return {
    css: generateLoaders(['css']),
    postcss: generateLoaders(['css']),
    less: generateLoaders(['css', 'less']),
    sass: generateLoaders(['css', 'sass?indentedSyntax']),
    scss: generateLoaders(['css', 'sass']),
    stylus: generateLoaders(['css', 'stylus']),
    styl: generateLoaders(['css', 'stylus'])
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      loader: loader
    })
  }
  return output
}

// Multiple entry for html
exports.setEntrys = function(conf) {

  conf.entry = conf.entry || {}
  conf.plugins = conf.plugins || []

  var isNotDev = 'development' !== process.env.NODE_ENV
  var htmlConfig = {
    minify: {
      removeComments: isNotDev,
      collapseWhitespace: isNotDev,
      removeAttributeQuotes: isNotDev
    }
  }

  var entries = Object.keys(conf.entry)
  entries.map(function(ent) {
    if ('common' === ent) return;
    // generate dist template.html with correct asset hash for caching.
    // you can customize output by editing template.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    conf.plugins.push(new HtmlWebpackPlugin(Object.assign({
      filename: `${path.resolve(config.base.outputRoot, 'views')}/${ent}/index.html`,
      chunks: [ent, 'vendor', 'manifest', 'common'],
      template: config.base.entryTemplate,
      inject: false,
      chunksSortMode: 'dependency',
      module: config.base.moduleName
    }, htmlConfig)))
  });

  return conf;
}
