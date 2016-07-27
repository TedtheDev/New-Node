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


app.controller('getPortfolioProjectInfo', ['$scope', function($scope) {
  $scope.loadProject = function(projectName) {
    $scope.servePortfolioProject = 'projects/' + projectName;
  };
  $scope.loadProjectFull = 'views/projectFull';
}]);

app.controller('loadAllProjects', [ '$scope', function($scope) {
  $scope.firstWebsite = 'projects/firstWebsite';
  $scope.wordpress = 'projects/wordpress';
  $scope.esssProject = 'projects/esssProject';
  $scope.payrollSystem = 'projects/payrollSystem';
  $scope.lampProject = 'projects/lampProject';
  $scope.lanProject = 'projects/lanProject';
  $scope.nodeWebsite = 'projects/nodeWebsite';
}]);

app.controller('getTemplate', ['$scope', function($scope) {
  $scope.loadTemplate = function(templateName) {
    $scope.serveContent = '/views/'+templateName;
  };
}]);
