//CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService){
  $scope.city = cityService.city;
  $scope.$watch('city', function(){
      cityService.city = $scope.city;
    }
  );
  $scope.submit = function (){
      $location.path('/forecast');
    };
}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService){
  $scope.city = cityService.city;

  $scope.days = $routeParams.days || '5';

  $scope.weatherResult = weatherService.GetWeather($scope.city,$scope.days);

  // console.log($scope.weatherResult);
  $scope.farConverter = function(temp) {
    return Math.round(( 1.8 * (temp - 273)) + 32);
  };
  $scope.dateFormatter = function(dt){
    return new Date(dt * 1000);
  };
  $scope.weatherImg = {
    lightrain:'../assets/lightrain.png',
    moderaterain:'../assets/moderaterain.png',
    heavyrain:'../assets/heavyrain.png',
    overcastclouds:'../assets/overcastclouds.png',
    clearsky:'../assets/clearsky.png',
    brokenclouds:'../assets/overcastclouds.png',
    heavyintensityrain:'../assets/heavyrain.png',
    scatteredclouds:'../assets/overcastclouds.png',
    fewclouds:'../assets/overcastclouds.png'
  };
}]);
