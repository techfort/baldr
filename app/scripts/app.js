define(['angularAMD', 'angular-route'], function (angularAMD) {

  'use strict';

  var app = angular.module('doomswordApp', ['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', angularAMD.route({
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        }))
        .when('/bio', angularAMD.route({
          templateUrl: 'views/bio.html'
        }))
        .otherwise({
          redirectTo: '/'
        });
    });

  angularAMD.bootstrap(app);
  return app;
});