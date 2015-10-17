var app = angular.module('mainApp', [
	'ngRoute'
]);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when("/", { templateUrl: "templates/index.html", controller: "IndexController" })
		.otherwise("/404", { templateUrl: "templates/404.html", controller: "ErrorController" });
}]);
