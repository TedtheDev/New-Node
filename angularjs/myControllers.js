app.controller('myController', function($scope) {
  $scope.theMessageForHelloWorld = "Hello World from AngularJS";
});

/*
var firstLoad;
app.controller('firstLoad', function($scope, $http) {
  firstLoad = 0;
  if(firstLoad <= 0){
    $http.get('/views/home')
      .success(function(html) {
        $scope.firstInitialLoad = html;
        firstLoad = 1;
      })
      .error(function() {
        console.log('Error: IT DOESNT WORK');
      });
  }
});
*/

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

app.controller('getContentViews', function($scope, $http, $compile) {
  //get about.jade
  $scope.aboutMeView = function() {
    $http.get('/views/about')
      .success(function(html) {
        $scope.serveContent = html;
      })
      .error(function() {
        console.log('Error: IT DOESNT WORK');
      });
  };

  //get home.jade
  $scope.homeView = function() {
    $http.get('/views/home')
      .success(function(html) {
        $scope.serveContent = html;
      })
      .error(function() {
        console.log('Error: IT DOESNT WORK');
      });
  };
});
