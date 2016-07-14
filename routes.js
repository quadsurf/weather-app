//ROUTES
weatherApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'pages/home.htm',
      controller: 'homeController'
    })
    .when('/forecast', {
      templateUrl: 'pages/forecast.htm',
      controller: 'forecastController'
    })
    .when('/forecast/:days', {
      templateUrl: 'pages/forecast.htm',
      controller: 'forecastController'
    })
    .otherwise({ redirectTo: '/blah'});
}]);