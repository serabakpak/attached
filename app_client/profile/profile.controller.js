angular
	.module('attached')
	.controller('ProfileController', ProfileController);

ProfileController.$inject = ['attachedData'];
function ProfileController(attachedData) {
  var vm = this;


  attachedData.getProfile()
    .success(function(data) {
      console.log('data from profile controller: ', data);
      vm.user = data;
    })
    .error(function (e) {
      console.log(e);
    });
}