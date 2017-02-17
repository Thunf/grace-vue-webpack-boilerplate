var glob = require('glob')
var path = require('path')
var chalk = require('chalk')

function exec (cmd) {
  return require('child_process').execSync(cmd).toString().trim()
}

function callback(cb) {
  return 'function' === typeof cb ? cb : function(){;}
}

// 匹配grace下配置目录
function matchServerJson(graceRoot) {
  return glob.sync(path.join(graceRoot, '*/config/main.development.js')) || []
}

// 匹配grace目录
function findServerFolder(graceRoot, scb, ecb) {
  var confMatch = matchServerJson(graceRoot)
  ;(1 === confMatch.length) ? callback(scb)({
    serverRoot: path.resolve(confMatch[0], '../..'),
    serverConf: confMatch[0]
  }) : callback(ecb)(confMatch.length)
}

// 匹配中文系统
function matchSysLang_zh() {
  var langConf = exec('command -v env && env | grep LANG').toString().toLowerCase()
  return /(zh|cn)/.test(langConf)
}

module.exports = function (graceRoot) {
  var warnings = [],
      result = {};

  // 匹配server
  findServerFolder(graceRoot, function(data) {

    Object.assign(result, data)

  }, function(err) {

    var message = {
      en: [
        "Fail to match koa-grace server folder, " + chalk.red("normalize folder structure") + " and retry ",
        "Refer to: ",
        chalk.green("https://github.com/xiongwilee/koa-grace/tree/v2.x#目录结构-1 ")
      ],
      zh: [
        "未匹配到Koa-grace正确的目录结构，请" + chalk.red("调整目录结构") + "后重试！",
        "请参考：",
        chalk.green("https://github.com/xiongwilee/koa-grace/tree/v2.x#目录结构-1 ")
      ]
    }

    warnings.push.call(warnings, message[matchSysLang_zh() ? 'zh' : 'en'].join('\n  '))

  })


  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must check following:'))
    console.log()
    for (var i = 0, len = warnings.length; i < len; i++) {
      var warning = warnings[i]
      console.log('  ' + warning)
    }
    console.log()
    process.exit(1)
  } else {
    return result;
  }
}
