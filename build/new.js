var fs = require('fs')
var path = require('path')
var chalk = require('chalk')
var async = require('async')
var inquirer = require('inquirer')
var templates = require('./template.js')

var answers = {}
var promptMap = {
  string: 'input',
  boolean: 'confirm'
}
var typeMap = {}
var typeArr = [{
  text: 'init both controller & vue',
  exist: ['controller', 'vues']
}, {
  text: 'init controller only',
  exist: ['controller']
}, {
  text: 'init vue files only',
  exist: ['vues']
}]

// ask for info
ask({
  type: {
    type: 'list',
    required: true,
    message: 'type: ',
    choices: typeArr.map(function(type, index){
      var obj = {};
      obj[type.text] = {
        index: index,
        exist: type.exist
      }
      Object.assign(typeMap, obj)
      return type.text
    })
  },
  name: {
    required: true,
    message: 'name: ',
    default: 'demo',
    validate: function(data) {
      var dir, msg, exist, existPath = [];
      var valid = typeMap[answers.type].exist.map(function(type) {
        switch (type) {
          case 'controller': dir = ['controller', `${data}.js`]; break;
          case 'vues':       dir = ['vues', data]; break;
        }
        existPath.splice(0, 0, path.join.apply(null, dir))
        dir = getFilePath(dir)
        exist = fs.existsSync(dir)
        !exist && existPath.splice(0, 1)
        return !exist
      })

      valid = valid.reduce(function(pre, post) {return pre && post })
      msg = chalk.red(existPath.map(function(d) {return d + ' has already existed'}).join('\n>> ') )
          + chalk.green('\nUse other name or Press Ctrl+C to stop')

      return valid || msg
    }
  }
}, answers, function() {

  var temp = getTemplates(answers.name, typeMap[answers.type].index),
      folderPath = ['controller/' + answers.name + '.js',
                    'views/' + answers.name + '/',
                    'vues/' + answers.name + '/'];

  folderPath.map(function(route){
    var type = new RegExp('^(\\w+)\/').exec(route)[1];
    temp[type] && newFile(temp[type], path.resolve(__dirname, '..', route));
  });

})




// get resolve file path
function getFilePath (pArr) {
  if ( 'string' === typeof pArr ) {pArr = [pArr] }
  if ( !Array.isArray(pArr) ) {pArr = [] }
  return path.resolve(__dirname, '..', path.join.apply(null, pArr))
}

// ask each question
function ask (prompts, answers, done) {
  async.eachSeries(Object.keys(prompts), function (key, next) {
    prompt(key, prompts[key], answers, next)
  }, done)
}

function prompt (key, prompt, answers, done) {
  // prompt
  inquirer.prompt([{
    type: promptMap[typeof prompt.default] || prompt.type || 'confirm',
    name: key,
    message: prompt.message || prompt.label || key,
    default: prompt.default,
    choices: prompt.choices || [],
    validate: prompt.validate || function () { return true },
    filter: prompt.filter || function (ans) { return ans }
  }], function (answer) {
    // merge answers
    Object.assign(answers, answer)
    done()
  })
}



// 返回模板文件
function getTemplates (name, type) {
  var template = templates(name);
  var temp = {}, structure;

  typeArr[type].exist.map(function(type) {
    switch (type) {
      case 'controller': {
        structure = {
          controller: {name: name + '.js', content: template['controller'] }
        }
        break;
      }
      case 'vues': {
        structure = {
          vues: {
            type: 'folder',
            content: [
              {name: 'index.vue', content: template['vue.vue']  },
              {name: 'index.js' , content: template['vue.js']   },
              {name: 'router.js', content: template['vue.router']
            }]
          }
        }
        break;
      }
      case 'views': {
        structure = {
          views: {
            type: 'folder',
            content: [{name: 'index.html', content: template['views'] }]
          }  
        }
        break;
      }
    }
    Object.assign(temp, structure)
  })
  return temp
}

// 新建文件/文件夹
function newFile (obj, route) {
    var _cb = newFile;
    try {
        if (obj.type && 'folder' === obj.type) {
            fs.mkdirSync(route);
            console.log(chalk.green('新建文件夹：'), chalk.cyan(dirPath(route)));
            _cb(obj.content, route);
        } else {
            if (obj.length) {
                obj.map(function(o) { _cb(o, route) })
            } else if (obj.name) {
                var filePath = route.indexOf(obj.name) > -1 ? route : path.join(route, obj.name);
                fs.writeFileSync(filePath, obj.content);
                console.log(chalk.green('新建文件：'), chalk.cyan(dirPath(filePath)));
            }
        }
    } catch (e) {
        console.log(chalk.red('我也不知道发生了什么，手动创建吧'), e);
    }
}

function dirPath (route) {
  return path.relative(path.resolve(__dirname, '..'), route)
}

