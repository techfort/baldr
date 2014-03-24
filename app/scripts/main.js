require.config({
  baseUrl: "scripts",
  paths: {
    'jquery': '../bower_components/jquery/jquery.min',
    'angular': '../bower_components/angular/angular',
    'angular-resource': '../bower_components/angular-resource/angular-resource',
    'angular-route': '../bower_components/angular-route/angular-route',
    'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
    'angularAMD': '../bower_components/angularAMD/angularAMD',
    'ngload': '../bower_components/angularAMD/ngload',
    'ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
    'HomeCtrl': 'controllers/home',
    'MenuCtrl': 'controllers/menu',
    'BioCtrl': 'controllers/bio'
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
    'ui-router': {
      exports: 'angular',
      deps: ['angular']
    },
    'angular-sanitize': ['angular']
  },
  deps: ['app']
});