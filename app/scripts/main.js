/*
Copyright (c) 2014, d3athmast3r @ techfort <info.techfort@gmail.com>
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met: 

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer. 
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution. 

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

The views and conclusions contained in the software and documentation are those
of the authors and should not be interpreted as representing official policies, 
either expressed or implied, of the FreeBSD Project.
*/

(function () {
  var paths = {
    'r': '../bower_components/requirejs/require',
    'jquery': '../bower_components/jquery/jquery.min',
    'angular': '../bower_components/angular/angular',
    'angular-resource': '../bower_components/angular-resource/angular-resource',
    'angular-route': '../bower_components/angular-route/angular-route',
    'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
    'angularAMD': '../bower_components/angularAMD/angularAMD',
    'ngload': '../bower_components/angularAMD/ngload',
    'ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
    'config': './config',
    'MenuCtrl': 'controllers/menu',
    'NewsCtrl': 'controllers/news',
    'NewsCtrl': 'controllers/news',
    'NewsCtrl': 'controllers/news',
    'NewsCtrl': 'controllers/news',
    'NewsCtrl': 'controllers/news',
    'HomeCtrl': 'controllers/home',
    'BioCtrl': 'controllers/bio',
    'MembersCtrl': 'controllers/members',
    'FaqCtrl': 'controllers/faq',
    'ContactCtrl': 'controllers/contact'
  };
  require.config({
    baseUrl: "scripts",
    urlArgs: "bust=" + (new Date()).getTime(), // development only
    paths: paths,
    shim: {
      'jquery': {
        exports: '$'
      },
      'angular': {
        exports: 'angular'
      },
      'angularAMD': ['angular'],
      'ngload': ['angularAMD'],
      'ui-router': {
        exports: 'angular',
        deps: ['angular']
      },
      'angular-sanitize': ['angular']
    },
    include: ['r'],
    out: 'doomsword.min.js',
    deps: ['app']
  });

  try { module.exports = paths } catch (err) {}
}());