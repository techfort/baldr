define([
  'app',
  'directives/menuitem'
], function (app) {

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
    }
  ]);

});