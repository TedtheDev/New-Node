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

app.controller('getPortfolioProjectInfo', function($scope, $http, $compile) {
  //get about.jade
  $scope.getProjectInfo = function() {
    $http.get('/views/firstWebsite')
      .success(function(html) {
        $scope.servePortfolioProject = html;
      })
      .error(function() {
        console.log('Error: IT DOESNT WORK');
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

  //get portfolio.jade
  $scope.portfolioView = function() {
    $http.get('/views/portfolio')
      .success(function(html) {
        $scope.serveContent = html;
      })
      .error(function() {
        console.log('Error: IT DOESNT WORK');
      });
  };
});
