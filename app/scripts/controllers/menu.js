define([
  'app',
  'jquery',
  'directives/menuitem'
], function (app, $) {

  app.register.controller('MenuCtrl', ['$scope', 'Site', '$utils',
    function MenuCtrl($scope, Site, $utils) {
      $scope.pages = Site.getPages();

      $scope.$watch(function () {
        return Site.getActive();
      }, function (v) {
        console.log('Selected is ' + v);
        $scope.selected = v;
      });

      $scope.setActive = function (page) {
        $utils.log('Page' + page);
        Site.setActive(page);
      };

      var basePath = 'images/',
        index = 0,
        images = [
          basePath + 'asgardsreien.png',
          basePath + 'a_viking_foray.jpg'
        ];

    }
  ]);

});