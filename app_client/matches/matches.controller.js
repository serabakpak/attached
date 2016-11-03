angular
	.module('attached')
	.controller('MatchesController', MatchesController);

MatchesController.$inject = ['$http', 'authentication'];
function MatchesController ($http, authentication) {
	var vm = this;




	$http({
		method: 'GET',
		url: '/api/matches',
		headers: {
		  Authorization: 'Bearer '+ authentication.getToken()
		} 
	}).then(function successCallback(res) {
		console.log('response for matchesCtrl', res.data);
		vm.matches = res.data;




	}, function errorCallback (err) {
		console.log('there was an error getting matches', res);
	}); 

}

