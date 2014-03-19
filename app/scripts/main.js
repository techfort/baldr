require.config({
  baseUrl: "scripts",
  paths: {
    'jquery': '../bower_components/jquery/jquery.min',
    'angular': '../bower_components/angular/angular',
    'angular-resource': '../bower_components/angular-resource/angular-resource',
    'angular-route': '../bower_components/angular-route/angular-route',
    'angularAMD': '../bower_components/angularAMD/angularAMD',
    'ngload': '../bower_components/angularAMD/ngload',
    'MainCtrl': 'controllers/main'
  },
  shim: {
    'jquery': {
      exports: '$'
    },
    'angular': {
      exports: 'angular'
    },
    'angularAMD': ['angular'],
    'ngload': ['angularAMD'],
    'angular-route': ['angular']
  },
  deps: ['app']
});