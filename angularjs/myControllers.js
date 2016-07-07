app.controller('myController', function($scope) {
  $scope.theMessageForHelloWorld = "Hello World from AngularJS";
});

app.controller('getRestaurants', function($scope, $http) {
  $scope.getRestaurants = function() {
    $http.get('/api/restaurants')
      .success(function(data) {
        //var theRestaurants = JSON.parse(data)
        $scope.restaurants = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

});

app.controller('getContent', function($scope, $http) {
  $scope.aboutMe = function() {
    $http.get('/views/about')
      .success(function(html) {
        $scope.serveContent = html;
      })
      .error(function() {
        console.log('Error: IT DONE DO NOT WORK');
      });
  };
});

app.controller('getContentViews', function($scope, $http) {
  $scope.aboutMe = function() {
    $http.get('/views/about')
      .success(function(html) {
        $scope.serveContent = html;
      })
      .error(function() {
        console.log('Error: IT DONE DO NOT WORK');
      });
  };
});
