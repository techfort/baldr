define([
  'angularAMD',
  'ui-router'
], function (angularAMD) {

  'use strict';

  var pages = [{
    name: 'home',
    label: 'Chapter I:......On Blades, and Ore.'
  }, {
    name: 'bio',
    label: 'Chapter II:.....The Rise of the Sword.'
  }, {
    name: 'members',
    label: 'Chapter III:....Champions Eternal'
  }, {
    name: 'faq',
    label: 'Chapter IV:.....The Oracle of Doom'
  }, {
    name: 'contact',
    label: 'Chapter V:......Resounding Horn'
  }],
    controllerName,
    i = 0,
    len = pages.length,
    page;


  console.log('loading app.js');
  var app = angular.module('doomswordApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider) {

        
        // register routes
        for (i; i < len; i += 1) {

          page = pages[i];
          controllerName = page.name.charAt(0).toUpperCase() + page.name.substring(1) + 'Ctrl';
          console.log(i + ':' + controllerName);
          $stateProvider
            .state(page.name, {
              url: '/' + page.name,
              views: {
                'main': angularAMD.route({
                  templateUrl: 'views/' + page.name + '.html',
                  controller: controllerName
                }),
                'menu': angularAMD.route({
                  templateUrl: 'views/menu.html',
                  controller: 'MenuCtrl'
                })
              }
            });
        }

        $urlRouterProvider.otherwise('/home');

      }
    ]);
  app.constant('pages', pages);
  app.constant('$utils', {
    log: function () {
      if (console) {
        if (console.log) {
          var i = 0, len = arguments.length;
          for (i; i < len; i += 1) {
            console.log(arguments[i]);
          }
        }
      } 
    }
  });
  app.service('Site', ['$utils', function Site($utils) {
      var selected = 'home';
      return {
        getPages: function () {
          return pages;
        },
        setActive: function (page) {
          $utils.log('Active page', page);
          selected = page;
        },
        getActive: function () {
          return selected;
        }
      };
    }
  ]);
  angularAMD.bootstrap(app);
  return app;
});