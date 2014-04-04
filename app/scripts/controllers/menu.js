define([
  'app',
  'jquery',
  'directives/menuitem',
  'directives/bgs'
], function (app, $) {

  app.register.controller('MenuCtrl', ['$scope', 'Site', '$utils',
    function MenuCtrl($scope, Site, $utils) {
      $scope.pages = Site.getPages();

      $scope.$watch(function () {
        return Site.getActive();
      }, function (v) {
        $scope.selected = v;
      });

      $scope.setActive = function (page) {
        Site.setActive(page);
      };

    }
  ]);

});