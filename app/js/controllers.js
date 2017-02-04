angular.module('mySite.controllers', []).

	controller('gatitosController', function($scope) {
		$scope.numberOfCats = 24;
		$scope.headTitle = "A continuación, " + $scope.numberOfCats + " gatos";
		$scope.getArray = function(size) {
			return new Array(size);
		}
	}).

	controller('homeController', function($scope) {}).

	/* Drivers controller */
	controller('driversController', function($scope, ergastAPIservice) {
		$scope.nameFilter = null;
		$scope.driversList = [];
		$scope.searchFilter = function (driver) {
				var re = new RegExp($scope.nameFilter, 'i');
				return !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName);
		};

		ergastAPIservice.getDrivers().success(function (response) {
				//Digging into the response to get the relevant data
				$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
		});
	}).

	/* Driver controller */
	controller('driverController', function($scope, $routeParams, ergastAPIservice) {
		$scope.id = $routeParams.id;
		$scope.races = [];
		$scope.driver = null;

		ergastAPIservice.getDriverDetails($scope.id).success(function (response) {
				$scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]; 
		});

		ergastAPIservice.getDriverRaces($scope.id).success(function (response) {
				$scope.races = response.MRData.RaceTable.Races; 
		}); 
	});
