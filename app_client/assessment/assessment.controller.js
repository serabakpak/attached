
angular
	.module('attached')
	.controller('AssessmentController', AssessmentController);

AssessmentController.$inject = ['attachedData', '$scope'];
function AssessmentController (attachedData, $scope) {
	var vm = this;
	vm.complement = '';
	vm.conflict = '';

  	attachedData.getProfile()
	    .success(function(data) {
	      console.log('data from assessment controller: ', data);
	      vm.user = data;
	      vm.userId = data._id
	      vm.assessmentId = data.assessmentId
	      Traitify.setPublicKey('6fc3921e05954f80b20fe886de');
				Traitify.setHost('https://api.traitify.com');
				Traitify.setVersion('v1');      
				Traitify.ui.load(vm.assessmentId, '.assessment');

				Traitify.get("/assessments/"+vm.assessmentId+"?data=blend&image_pack=linear").then(function(data){
						console.log('personality blend data: ', data);


						  $scope.$apply(function(){
						    vm.complement = data.personality_blend.details[1].body;
						    vm.conflict = data.personality_blend.details[2].body;
						    
						  });
  				
			});
		
	    })
	    .error(function (e) {
	      console.log(e);
	
    });

	


}
// $route.reload();
// $window.location.reload();

