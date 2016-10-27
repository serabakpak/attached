
angular.module('attached', ['ngRoute', 'ngAnimate', 'ngSanitize','ui.bootstrap'])
	.config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/main'
    }).otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}