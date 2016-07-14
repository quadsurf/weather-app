lightrain
moderaterain
heavyrain
heavyintensityrain
overcastclouds
clearsky
fewclouds

<!-- <img src="{{
    weather.weather[0].description === 'light rain' ? weatherImg.lightrain
  : (weather.weather[0].description === 'light rain' ? weatherImg.lightrain)
  : (weather.weather[0].description === 'light rain' ? weatherImg.lightrain)
  : assets/weather-icons-set.png
 }}" alt="{{ weather.weather[0].main }}" /> -->


//SERVICES
weatherApp.service('cityService', function(){
  this.city = "Austin, TX";
});

$scope.city = cityService.city;

$scope.$watch('city', function(){
  cityService.city = $scope.city;
});

$scope.submit = function (){
  $location.path('/forecast');
}
$scope.city = $cityService.city;


<!-- for {{ city }} -->

<!-- <div class="row">
  <div class="col-md-4 col-md-offset-4">
    <h4>Forecast by City</h4>
    <div class="form-group">
      <input type="text" class="form-control">
    </div>
    <a href="#/forecast" class="btn btn-primary">Get Forecast</a>
  </div>
</div> -->


<!-- <form ng-submit="submit()">
  <div class="form-group">
    <input type="text" ng-model="city" class="form-control">
  </div>
    <input type="submit" class="btn btn-primary" value="Get Forecast">
</form> -->


<!-- <script src="routes.js"></script>
<script src="services.js"></script>
<script src="controllers.js"></script>
<script src="directives.js"></script> -->
