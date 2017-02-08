angular
	.module('attached')
	.controller('ProfileController', ProfileController);

ProfileController.$inject = ['attachedData', '$scope', '$http', 'authentication'];
function ProfileController(attachedData, $scope, $http, authentication) {
  var vm = this;
  
  attachedData.getProfile()
    .success(function(data) {
      console.log('data from profile controller: ', data);
      vm.user = data;
    })
    .error(function (e) {
      console.log(e);
    });

  $scope.onUCUploadComplete = function(info) {
    console.log('Photo was uploaded with data:', info); 
    var imageUrl = info.cdnUrl;
    $http({
      method: 'PATCH',
      url: '/api/profile/',
      data: { image: imageUrl },
      headers: {
        Authorization: 'Bearer '+ authentication.getToken()
      }
    }).then (function editSuccess(json) {
      console.log('editing user image', json);

    }, function editError(response) {
      console.log('There an error editing the user\'s photo(profileCtrl)', response);
    });	
  };
}