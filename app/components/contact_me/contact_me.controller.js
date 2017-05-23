app.controller('contactMeController',function($scope,$timeout){
	$scope.primeClass = "init";
	$timeout(function(){
		$scope.primeClass = "";
	},1500);
});