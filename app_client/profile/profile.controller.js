angular
	.module('attached')
	.controller('ProfileController', ProfileController);

ProfileController.$inject = ['$location', 'attachedData'];
function ProfileController($location, attachedData) {
  var vm = this;


  attachedData.getProfile()
    .success(function(data) {
      console.log(data);
      vm.user = data;
    })
    .error(function (e) {
      console.log(e);
    });
}