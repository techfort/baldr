define(['app'],
  function (app) {
    app.register.directive('doomsword', function () {
      return {
        restrict: 'E',
        template: '<span class="doomsword">DoomSword</span>',
        link: function(scope, elem, attrs) {
          
        }
      }
    });
  });
