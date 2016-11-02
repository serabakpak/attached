
angular
	.module('attached')
	.controller('AssessmentController', AssessmentController);

AssessmentController.$inject = ['attachedData', '$route', '$scope', '$location', '$http', 'authentication'];
function AssessmentController (attachedData, $route, $scope, $location, $http, authentication) {
	var vm = this;
	vm.complement = '';
	vm.conflict = '';

	attachedData.getProfile()
    .success(function(data) {
      console.log('data from assessment controller: ', data);
      vm.user = data;
      vm.userId = data._id;
      vm.assessmentId = data.assessmentId;
      Traitify.setPublicKey('6fc3921e05954f80b20fe886de');
			Traitify.setHost('https://api.traitify.com');
			Traitify.setVersion('v1');  
			    
			Traitify.ui.load(vm.assessmentId, '.assessment');


			Traitify.get("/assessments/"+vm.assessmentId+"?data=blend&image_pack=linear").then(function(data){
					console.log('personality blend data: ', data);
					  			




					  $scope.$apply(function(){
					    vm.complement = data.personality_blend.details[1].body;
					    vm.conflict = data.personality_blend.details[2].body;
					    vm.user.personalityBlend = data.personality_blend.name;
				    	vm.user.personalityType1 = data.personality_blend.personality_type_1.name;
				    	vm.user.personalityType2 = data.personality_blend.personality_type_2.name;

				    	var removedPunctuation = data.personality_blend.details[1].body.replace(/./gi, '');
				    	console.log('removedPunctuation', removedPunctuation);
				    	function findCompPersonalities (paragraph) {
				    		var newArr = [];
				    		var oldArr = paragraph.split(' ');
				    		
				    		oldArr.forEach(function(word) {
				    			if (word == 'Reliable' || word == 'Adventurous' || word == 'Mellow' || word == 'Rational' || word == 'Social' || word == 'Thoughtful' || word == 'Charismatic') {
				    				newArr.push(word);
				    			}
				    					
				    		});
				    		console.log(newArr);
				    		return newArr;
				    	}

				    	var compatibleArr = findCompPersonalities(removedPunctuation);

					    userData = {
					    	personalityBlend: data.personality_blend.name,
					    	personalityType1: data.personality_blend.personality_type_1.name,
					    	personalityType2: data.personality_blend.personality_type_2.name,
					    	compatiblePersonalities: compatibleArr
					    }

					    $http({
					      method: 'PATCH',
					      url: '/api/profile/',
					      data: userData,
					      headers: {
					        Authorization: 'Bearer '+ authentication.getToken()
					      }
					    }).then (function editSuccess(json) {
					      console.log('editing user', json);
					      // $route.reload();
					      
					    }, function editError(response) {
					      console.log('There an error editing the user(assessmentCtrl)', response);
					    })			    
					  });
			});	
    })
    .error(function (e) {
      console.log(e);	
  });





}
// $route.reload();
// $window.location.reload();

