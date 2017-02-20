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
  $translateProvider.translations('en', {
  	'home': 'Emperador de las tinieblas',
  	'kittens': 'Kittens',
    'es': 'Spanish',
    'en': 'English',
    'welcome': 'Welcome!',
    'description': 'This is a test page. If you come up with something to put in here do not doubt to contact me to emperadordelastinieblas_666@ashotashell.com.',
    'kittens_title': 'And now, {{numberOfCats}} kittens'
  });

  $translateProvider.translations('es', {
  	'home': 'Emperador de las tinieblas',
  	'kittens': 'Gatitos',
    'es': 'Español',
    'en': 'Yanqui',
    'welcome': 'Bienvenido!',
    'description': 'Esta es una página de prueba. Si se te ocurre algo que poner acá no dudes en contactarme a emperadordelastinieblas_666@ashotashell.com.',
    'kittens_title': 'A continuacion, {{numberOfCats}} gatitos'
  });

  $translateProvider.preferredLanguage('es');
}]);

app.controller('languageController', ['$translate', '$scope', function ($translate, $scope) {
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
}]);