angular
  .module('attached')
  .controller('LogoutController', LogoutController);

console.log('logout a');
LogoutController.$inject = ['$window','authentication'];
function LogoutController($window, authentication) {
    console.log('logged out');
    authentication.logout();
    $window.location.href = '/'; 
}