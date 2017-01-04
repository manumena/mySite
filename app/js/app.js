angular.module('mySite', [
  'mySite.services',
  'mySite.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/drivers", {templateUrl: "partials/drivers.html", controller: "driversController"}).
	when("/drivers/:id", {templateUrl: "partials/driver.html", controller: "driverController"}).
	when("/", {templateUrl: "partials/home.html", controller: "homeController"}).
	otherwise({redirectTo: '/'});
}]);