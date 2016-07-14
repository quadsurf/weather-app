//CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService){
  $scope.city = cityService.city;
  $scope.$watch('city',
  function(){
    cityService.city = $scope.city;
  });
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', 'cityService', function($scope, $resource, cityService){
  $scope.city = cityService.city;
  $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?appid=10a8c006e50645f16bb3675ed81bc3c3',
  {
    callback: 'JSON_CALLBACK'
  }, {
    get: {
      method: 'JSONP'
    }
  });
  $scope.weatherResult = $scope.weatherAPI.get({
    q: $scope.city,
    cnt: 5
  });
  // console.log($scope.weatherResult);
  $scope.convert2Far = function(temp) {
    return Math.round(( 1.8 * (temp - 273)) + 32);
  };
  $scope.formatDate = function(dt){
    return new Date(dt * 1000);
  };
  $scope.weatherImg = {
    lightrain:'assets/lightrain.png',
    moderaterain:'assets/moderaterain.png',
    heavyrain:'assets/heavyrain.png',
    overcastclouds:'assets/overcastclouds.png',
    clearsky:'assets/clearsky.png',
    brokenclouds:'assets/overcastclouds.png',
    heavyintensityrain:'assets/heavyrain.png',
    scatteredclouds:'assets/overcastclouds.png',
    fewclouds:'assets/overcastclouds.png'
  };
}]);
