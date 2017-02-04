angular.module('mySite', [
  'mySite.services',
  'mySite.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/", {templateUrl: "partials/home.html", controller: "homeController"}).
	when("/gatitos", {templateUrl: "partials/gatitos.html", controller: "gatitosController"}).
	when("/drivers", {templateUrl: "partials/drivers.html", controller: "driversController"}).
	when("/drivers/:id", {templateUrl: "partials/driver.html", controller: "driverController"}).
	otherwise({redirectTo: '/'});
}]);