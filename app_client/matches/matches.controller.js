angular
	.module('attached')
	.controller('MatchesController', MatchesController);

MatchesController.$inject = ['$http'];
function MatchesController ($http) {
	$http({
		method: 'GET',
		url: '/api/matches' 
	}).then(function successCallback(res) {
		console.log('response for matchesCtrl', res);
	}, function errorCallback (err) {
		console.log('there was an error getting matches', res);
	}); 

}

