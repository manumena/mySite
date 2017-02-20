var app = angular.module('mySite', [
  'mySite.services',
  'mySite.controllers',
  'ngRoute',
  'pascalprecht.translate'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/", {templateUrl: "partials/home.html", controller: "homeController"}).
	when("/gatitos", {templateUrl: "partials/gatitos.html", controller: "kittensController"}).
	when("/drivers", {templateUrl: "partials/drivers.html", controller: "driversController"}).
	when("/drivers/:id", {templateUrl: "partials/driver.html", controller: "driverController"}).
	otherwise({redirectTo: '/'});
}]);

app.config(['$translateProvider', function ($translateProvider) {
	$translateProvider.useStaticFilesLoader({
		prefix: '/languages/locale-',
		suffix: '.json'
	});
	$translateProvider.preferredLanguage('es');
}]);

app.controller('languageController', ['$translate', '$scope', function ($translate, $scope) {
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
}]);