//SERVICES
weatherApp.service('cityService', function(){
  this.city = "Austin, TX";
});

$scope.city = cityService.city;

$scope.$watch('city', function(){
  cityService.city = $scope.city;
});

$scope.submit = function (){
  $location.path('#/forecast');
}
$scope.city = $cityService.city;
