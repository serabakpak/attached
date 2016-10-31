angular
    .module('attached', ['ngRoute', 'ngAnimate', 'ngSanitize','ui.bootstrap'])
    .config(config)
    .run(run);

config.$inject = ['$routeProvider', '$locationProvider'];
function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/home/home.view.html',
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    })
    .when('/register', {
      templateUrl: '/auth/register/register.view.html',
      controller: 'RegisterController',
      controllerAs: 'registerCtrl'
    })
    .when('/login', {
      templateUrl: '/auth/login/login.view.html',
      controller: 'LoginController',
      controllerAs: 'loginCtrl'
    })
    .when('/logout', {
      template: '',
      controller: 'LogoutController',
      controllerAs: 'logoutCtrl'
    })
    .when('/profile', {
      templateUrl: '/profile/profile.view.html',
      controller: 'ProfileController',
      controllerAs: 'profileCtrl'
    })
    .when('/assessment', {
      templateUrl: '/assessment/assessment.view.html',
      controller: 'AssessmentController',
      controllerAs: 'assessmentCtrl'
    })
    .otherwise({redirectTo: '/'});

  // use the HTML5 History API
  $locationProvider.html5Mode(true);
}

run.$inject = ['$rootScope', '$location', 'authentication'];
function run($rootScope, $location, authentication) {
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
    if ($location.path() === '/profile' && !authentication.isLoggedIn()) {
      $location.path('/');
    }
  });
}

  