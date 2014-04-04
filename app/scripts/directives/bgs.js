define(['app', 'jquery'], function (app, $) {
  app.register.directive('bgs', function () {

    return {
      restrict: 'E',
      template: '',
      //replace: true,
      scope: true,
      link: function (scope, elem, attrs) {
        var setBg = function (bg) {
          console.log('Bg: ' + bg);
          var basePath = 'images/bg/', img = '';
          switch (bg) {
            case 2:
              img = 'asgardsreien.jpg';
              break;
            case 1:
              img = 'a_viking_foray.jpg';
              break;
            case 0:
              img = 'fussli.jpg';
              break;
          }
          $('html').css('background-image', 'url(' + basePath + img + ')');
        }, counter = 0;

      }
    };

  });
});