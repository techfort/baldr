var config = require('./app/scripts/config.js'),
  fs = require('fs'),
  colors = require('colors'),
  command = process.argv[2],
  arg = process.argv[3],
  tplHead = '(function () {\n' +
    'var siteConfig = ',
  tplFooter = '\n\n' +
    '  if (typeof define === "function" && define.amd) {\n' +
    '    define("config", [], function () {\n' +
    '    return siteConfig;\n' +
    '  });\n' +
    '}\n' +
    '  try { module.exports = siteConfig; } catch (err) {}' +
    '\n})();',
  tplCtrl = 'define([\n' +
    '  \'app\'' +
    '], function (app) {\n\n' +

    '  app.register.controller(\'%s\', [\'$scope\', \'Site\', \'$utils\',\n' +
    '    function %s($scope, Site, $utils) {\n' +
    '  }\n' +
    ']);',
  log = function (msg) {
    console.log('['.blue + (new Date()).toUTCString().green + ']: '.blue + msg.green);
  },
  error = function (msg) {
    console.log('['.blue + (new Date()).toUTCString().green + ']: '.blue + msg.red);
  };

if (command === 'remove') {
  var i = 0,
    len = config.pages.length,
    output,found = false;
  for (i; i < len; i += 1) {
    if (config.pages[i].name === arg) {
      config.pages.splice(i, 1);
      found = true;
      break;
    }
  }
  if (found === false) {
    error('Could not find page ' + arg + ', aborting.');
    return;
  }
  output = tplHead + JSON.stringify(config, null, 2) + tplFooter;
  fs.writeFile('./app/scripts/config.js', output, function (err) {
    if (err) {
      error('Could not write file');
    } else {
      log('Config file saved');
    }
  });
  fs.readFile('./app/scripts/main.js', 'utf8', function (err, data) {
    if (err) {
      error('Could not read main.js');
      return;
    }
    if (data) {
      var controllerName = arg.charAt(0).toUpperCase() + arg.substring(1) + 'Ctrl',
        ctrl = '\n    \'' + controllerName + '\': \'controllers/' + arg + '\',';
      data = data.replace(ctrl, '');
      fs.writeFile('./app/scripts/main.js', data, function (err) {
        if (err) {
          error('Could not update main.js');
        } else {
          log('main.js updated');
        }
      });

    }

  });
  
  fs.unlinkSync('./app/views/' + arg + '.html');
  fs.unlinkSync('./app/scripts/controllers/' + arg + '.js');
  console.log('Done.');
}


if (command === 'add') {

  config.pages.push({
    name: arg,
    label: process.argv[4]
  });
  var output = tplHead + JSON.stringify(config, null, 2) + tplFooter,
    controllerName = arg.charAt(0).toUpperCase() + arg.substring(1) + 'Ctrl';
  fs.writeFile('./app/scripts/config.js', output, function (err) {
    if (err) {
      console.log('Could not write file');
    } else {
      console.log('Config file saved');
    }
  });
  fs.writeFile('./app/views/' + arg + '.html', '<h1>' + process.argv[4] + '</h1>', function (err) {
    if (err) {
      console.log('Could not write file');
    } else {
      console.log('View file saved');
    }
  });
  fs.writeFile('./app/scripts/controllers/' + arg + '.js',
    tplCtrl.replace(new RegExp('%s', 'g'), controllerName),
    function (err) {
      if (err) {
        console.log('Could not write file');
      } else {
        console.log('View file saved');
      }
    }
  )
  fs.readFile('./app/scripts/main.js', 'utf8', function (err, data) {
    if (err) {
      console.log('Could not read main.js file');
      return;
    }
    var decl = '\'MenuCtrl\': \'controllers/menu\',',
      repl = decl + '\n    \'' + controllerName + '\': \'controllers/' + arg + '\',';
    data = data.replace(decl, repl);
    fs.writeFile('./app/scripts/main.js', data, function (err) {
      if (err) {
        console.log(err);
      }
      console.log('main.js updated');
    });
  });
}