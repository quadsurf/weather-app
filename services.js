//SERVICES
weatherApp.service('cityService', function(){
  this.city = "Austin, TX";
});

weatherApp.service('weatherService', ['$resource', function($resource){

  this.GetWeather = function(city,days){

    var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?appid=10a8c006e50645f16bb3675ed81bc3c3',
    { callback: 'JSON_CALLBACK' }, { get: { method: 'JSONP' } });

    return weatherAPI.get({
      q: city,
      cnt: days
    });

  }

}]);
