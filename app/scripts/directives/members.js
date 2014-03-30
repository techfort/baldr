define([
  'app'
], function (app) {
  app.register.directive('members', [function () {
    return {
      templateUrl: 'views/memberstpl.html',
      restrict: 'E',
      transclude: true,
      link: function (scope, elem, attrs) {
        scope.sel = 'dm';
        scope.$watch('sel', function (v) {
          console.log(v);
        });
      }
    }
  }]);
});