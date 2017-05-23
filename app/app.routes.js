app.config(function($routeProvider) {
	$routeProvider
	.when("/lets-talk", {
        templateUrl : "app/components/contact_me/contact_me.html",
        controller  : "contactMeController"
    })
    .when("/open-source", {
        templateUrl : "app/components/open_source/open_source.html",
        controller  : "openSourceController"
    })
    .when("/more", {
        templateUrl : "app/components/more/more.html",
        controller  : "moreController"
    });
});