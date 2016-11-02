angular
	.module('attached')
	.controller('MatchesController', MatchesController);

MatchesController.$inject = ['$http', 'authentication'];
function MatchesController ($http, authentication) {
	$http({
		method: 'GET',
		url: '/api/matches',
		headers: {
		  Authorization: 'Bearer '+ authentication.getToken()
		} 
	}).then(function successCallback(res) {
		console.log('response for matchesCtrl', res);
	}, function errorCallback (err) {
		console.log('there was an error getting matches', res);
	}); 

}

