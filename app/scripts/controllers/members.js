define([
  'app',
  'directives/members',
  'directives/doomsword'
  ], function (app) {
    app.register.controller('MembersCtrl', ['$scope', function ($scope) {

      $scope.lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis molestie diam, ac fringilla nunc. Sed euismod lobortis nibh, et fermentum orci lacinia sollicitudin. Vestibulum lectus quam, convallis adipiscing massa id, ornare elementum tortor. Fusce sit amet tincidunt sem. Fusce quis magna ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus fringilla ut erat id facilisis. Proin tempus, enim vel consequat tempus, nisi nulla blandit arcu, a fringilla est leo nec justo. Mauris at augue est. Donec venenatis ipsum a mollis commodo.';
    }]);
  });