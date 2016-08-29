'use strict';

const path = require('path')
const glob = require('glob')
const config = require('./config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

exports.assetsPath = function(_path) {
  return path.posix.join(_path)
}

exports.cssLoaders = function(options) {
  options = options || {}
    // generate loader string to be used with extract text plugin
  function generateLoaders(loaders) {
    let sourceLoader = loaders.map(function(loader) {
      let extraParamChar
      if (/\?/.test(loader)) {
        loader = loader.replace(/\?/, '-loader?')
        extraParamChar = '&'
      } else {
        loader = loader + '-loader'
        extraParamChar = '?'
      }
      return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '')
    }).join('!')

    if (options.extract) {
      return ExtractTextPlugin.extract('vue-style-loader', sourceLoader)
    } else {
      return ['vue-style-loader', sourceLoader].join('!')
    }
  }

  // http://vuejs.github.io/vue-loader/configurations/extract-css.html
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
exports.styleLoaders = function(options) {
  let output = []
  let loaders = exports.cssLoaders(options)
  for (let extension in loaders) {
    let loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      loader: loader
    })
  }
  return output
}

// 获取所有的模块
exports.getModules = function() {
  let modulsFile = glob.sync(config.build.modules);
  let result = [];

  modulsFile.forEach(function(item) {
    let module = item.match(/\/([a-zA-Z-_]+)$/)[1];

    if (config.build.modulesEscape.indexOf(module) > -1) {
      return;
    }
    
    result.push(module);
  });
  return result;
}

/**
 * 根据当前的模块添加配置
 * @param {Object} conf
 */
exports.includeModules = function(conf, env) {
  conf.entry = conf.entry || {};

  let htmlConfig = {
    'development': {
      minify: {
        removeComments: false,
        collapseWhitespace: false,
        removeAttributeQuotes: false
      }
    },
    'production': {
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }
  }[env];

  let modules = exports.getModules();
  modules.forEach(function(item) {

    conf.entry[item] = `./vues/${item}/index.js`;

    conf.plugins.push(new HtmlWebpackPlugin(Object.assign({
      filename: `${config.build.viewsOutput}/${item}.html`,
      chunks: [item, 'vendor', 'manifest'],
      template: config.build.viewsEntry[item] || config.build.viewsEntry['default'],
      inject: true,
      chunksSortMode: 'dependency'
    }, htmlConfig)))
  });

  return conf;
}

