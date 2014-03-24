define([
  'app'
], function (app) {

  'use strict';

  app.register.controller('HomeCtrl', ['$scope',

    function HomeCtrl($scope) {
      $scope.ctrl = 'home';
    }
  ]);
});