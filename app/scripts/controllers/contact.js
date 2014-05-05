define([
  'app'
], function (app) {

  app.register.controller('ContactCtrl', ['$scope', 'Site', '$utils', '$interval',
    function ContactCtrl($scope, Site, $utils, $interval) {
    	$scope.curs = true;
    	$interval(function () {
    		$scope.curs = !$scope.curs;
    	}, 700);
    }
  ]);

});