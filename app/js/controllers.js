angular.module('mySite.controllers', []).

controller('kittensController', function($scope) {
	$scope.numberOfCats = 12;
	$scope.getArray = function(size) {
		return new Array(size);
	}
}).

controller('languageController', ['$translate', '$scope', function ($translate, $scope) {
	$scope.changeLanguage = function (langKey) {
		$translate.use(langKey);
	};
}]);