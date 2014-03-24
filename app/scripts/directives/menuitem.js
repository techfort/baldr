define([
  'app'
], function (app) {

  app.register.directive('menuitem', [

    function () {

      return {
        restrict: 'E',
        templateUrl: '/views/menuitem.html',
        scope: {
          page: '=page'
        },
        transclude: false,
        link: function (scope, element, attrs) {
          console.log('creating menu entry ' + attrs.page.name);
        }
      }
    }
  ]);
});