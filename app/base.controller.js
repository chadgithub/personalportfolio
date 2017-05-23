app.controller('baseController', function($scope,$location,$timeout) {
	$scope.curtainStatus = '';
	$scope.fullscreenMode = '';
	$scope.loading = '';
	$scope.bg = '';
	$scope.black = '';

	__private = {};

	$scope.curtainFold = function(foldBoolean){
		if(!foldBoolean){
			$scope.curtainStatus = '';
			$scope.fullscreenMode = '';
		}
		else{
			$scope.curtainStatus = '';
			$scope.fullscreenMode = '';
			$scope.loading = 'load';
			$timeout(function(){
				$scope.curtainStatus = 'folded';
				$scope.fullscreenMode = 'fullscreen';
				$scope.loading = '';
			},1500);
		}
	};

	$scope.turnBars = function(color){
		$scope.black = color;
	};

	$scope.changeBG = function(anchor){
		$scope.bg = anchor;
	};

	$scope.$on('$routeChangeStart', function(next, current) { 
		__private.pathCheck();
	});

	__private.pathCheck = function(){
		if($location.path() != "" && $location.path() != "/"){
			$scope.curtainStatus = '';
			$scope.fullscreenMode = '';
			$scope.loading = 'load';
			$scope.changeBG($location.path().substr(1));
			if($location.path().substr(1) == "more" ||
			   $location.path().substr(1) == "open-source"){
				$scope.turnBars('black');
			}else{
				$scope.turnBars('white');
			}

			$timeout(function(){
				$scope.curtainStatus = 'folded';
				$scope.fullscreenMode = 'fullscreen';
				$scope.loading = '';
			},1500);
		}else{
			$scope.curtainStatus = '';
			$scope.fullscreenMode = '';
		}
	}

	__private.pathCheck();

});