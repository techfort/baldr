define([
  'app',
  'jquery',
  'directives/menuitem',
], function (app, $) {

  app.register.controller('MenuCtrl', ['$scope', 'Site', '$utils', '$state',
    function MenuCtrl($scope, Site, $utils, $state) {

      $scope.pages = Site.getPages();

      $scope.$watch(function () {
        return Site.getActive();
      }, function (v) {
        $scope.selected = v;
      });

      $scope.setActive = function (page) {
        Site.setActive(page);
      };

      $scope.setActive($state.current.name);

    }
  ]);

});