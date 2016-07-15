//DAY TEMP PANEL
weatherApp.directive('weatherReport', function(){
  return {
    restrict: 'E',
    templateUrl: 'directives/weather-report.htm',
    replace: true,
    scope: {
      weather: '=',
      normalizeTemp: '&',
      formatDate: '&',
      dateDisplay: '@',
      weatherImg: '='
    }
  }
});
