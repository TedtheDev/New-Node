app.controller('myController', function($scope) {
  $scope.theMessageForHelloWorld = "Hello World from AngularJS";
});

app.controller('getRecords', function($scope) {
  $scope.restaurants = ["Vella", "Sampson Burgers", "Tacos"];
});
