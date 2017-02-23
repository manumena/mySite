var app = angular.module('mySite', [
  'mySite.services',
  'mySite.controllers',
  'ngRoute',
  'pascalprecht.translate'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/", {templateUrl: "partials/home.html"}).
	when("/kittens", {templateUrl: "partials/kittens.html", controller: "kittensController"}).
	when("/videogames", {templateUrl: "partials/videogames.html"}).
	otherwise({redirectTo: '/'});
}]);

app.config(['$translateProvider', function ($translateProvider) {
	$translateProvider.useStaticFilesLoader({
		prefix: '/languages/locale-',
		suffix: '.json'
	});
	$translateProvider.preferredLanguage('es');
}]);