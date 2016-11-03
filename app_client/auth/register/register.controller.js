angular
  .module('attached')
  .controller('RegisterController', RegisterController);

RegisterController.$inject = ['$location', 'authentication'];
function RegisterController($location, authentication) {
  var vm = this;

  vm.credentials = {
    name : "",
    email : "",
    password : "",
    gender : "",
    preferredGender: "" 
  };

  vm.onSubmit = function () {
    authentication
      .register(vm.credentials)
      .error(function(err){
        alert(err);
      })
      .then(function(){
        $location.path('assessment');
      });
  };





};