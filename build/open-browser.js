var fs = require('fs')
var opn = require('opn')
var path = require('path')
var chalk = require('chalk')
var config = require('./config')
var merge = require('webpack-merge')

// lsof -i:3000
var port = 3000
var serverConf = {
  vhost: {
    // some host looks like:
    // '192.168.1.123': '< module name >'
  },
  site: {
    port: port
  }
}

function loopKey(obj, keys) {
  if (keys && keys.length === 0) return obj;
  var loop = (keys && keys[0] && obj && obj.hasOwnProperty && obj.hasOwnProperty(keys[0]));
  return loop ? loopKey(obj[keys[0]], keys.slice(1)) : undefined
}

function lookForHost(hosts, autoOpenBrowser) {
  return Object.keys(hosts).filter(function(key, value) {
    // if vhost-matched, use the match one
    return hosts[key] === config.base.moduleName
  })[0] || (autoOpenBrowser && writeHostConf({
    // if auto-open & no-vhost-matched, auto set
    "127.0.0.1": config.base.moduleName
  }) || [
    // if no-auto-open & no-vhost-matched, to tip
    '> Maybe you have not set vhost to this app: ' + chalk.cyan(config.base.moduleName),
    '> Please set ' + chalk.magenta('vhost') + ' in ' + chalk.magenta('/server/config/server.json') + ' like this:',
    '  ' + chalk.green( JSON.stringify({
      merge: {vhost: {"127.0.0.1": config.base.moduleName } }
    }, null, 2).replace(/\n/g, '\n    ') ), '', ''
  ])
}

function writeHostConf(conf) {

  var serverJsonPath = path.resolve(config.base.serverConf, '../server.json'),
      serverJson = {},
      defaultJson = {merge: {vhost: conf } };

  try {
    serverJson = require(serverJsonPath)
    serverJson = merge(serverJson, defaultJson)
  } catch (e) {
    serverJson = defaultJson
  }

  setTimeout(function(){
    console.log(chalk.cyan('\n  No vhost matched & Write vhost ' + chalk.magenta(JSON.stringify(conf)) + ' in server.json 🚀'));
  })

  fs.writeFileSync(serverJsonPath, JSON.stringify(serverJson, null, 2));

  return Object.keys(conf)[0]
}

module.exports = function(autoOpenBrowser, autoOpenDelay) {

  try {
    serverConf = require(config.base.serverConf) || serverConf
  } catch (e) {}

  port = loopKey(serverConf, ['site', 'port']) || port
  host = lookForHost(loopKey(serverConf, ['vhost']), autoOpenBrowser)
  autoOpenDelay = +autoOpenDelay || 2000

  var uri = ['http://', host, ':', port ].join('')
  var uri2show = chalk.green(chalk.underline(uri))
  var tip = autoOpenBrowser ? [
    '> Browser will open ' + uri2show + ' in ' + autoOpenDelay/1000 + 's 🔍 \n'
  ] : ('string' === typeof host) ? [
    '> Page is running at ' + uri2show + ' 🔍 \n'
  ] : host;

  setTimeout(function(){
    console.log('\n  ' + tip.join('\n  '))
  })

  autoOpenBrowser && setTimeout(function(){
     opn( path.join(uri, config.dev.autoOpenPage || '') )
  }, autoOpenDelay)
}