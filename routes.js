//ROUTES
weatherApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
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
    .otherwise({ redirectTo: '/'});

    $locationProvider.html5Mode({enabled:true,requireBase:false});

}]);
