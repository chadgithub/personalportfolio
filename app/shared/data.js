var DATA =  (function (my) {
	var private = {}
	private.url = "http://localhost/simulations/recursive_limit/"
	
	my.limitsMatrix = function(){
		var returnValue;
		$.ajax({
			"async"   : false,
			"url"     : private.url+"data/limits.json",
			"success" : function(data){
				returnValue = data;
			}
		});

		return returnValue;
	};

	my.bets = function(){
		var returnValue;
		$.ajax({
			"async"   : false,
			"url"     : private.url+"data/bets.json",
			"success" : function(data){
				returnValue = data;
			}
		});

		return returnValue;
	};

	return my;
}(DATA || {}));