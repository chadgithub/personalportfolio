app.controller('moreController',function($scope,$timeout){
	$scope.primeClass = "init";
	$timeout(function(){
		$scope.primeClass = "";
	},200);
});