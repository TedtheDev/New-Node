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

app.controller('mobileMenuController', ['$scope', function ($scope){
  $scope.navSlideMenu = "menu";
  $scope.slideOut = function(className) {
    var test = className;
    $scope.navSlideMenu = "menu menu-animate menu-visible";
  };
  $scope.slideIn = function(className) {
    var test = className;
    $scope.navSlideMenu = "menu menu-animate";
  };
}]);

app.controller('getTemplate', ['$scope', '$filter', '$state', function($scope, $filter, $state) {
  $scope.loadTemplate = function(templateName) {
    $scope.serveContent = '/views/'+templateName;
  };
  $scope.loadTemplateOnChange = function(selectedNavLink) {
    if(selectedNavLink != null && selectedNavLink != "") {
      $scope.loadTemplate($filter('lowercase')(selectedNavLink));
    }
  };
  $state.go('home');
  $scope.navMenuClass = "nav-menu-mobile-toggle";
  $scope.changeClass = function(className) {
    if(className == "nav-menu-mobile-toggle") {
      $scope.navMenuClass = "nav-menu-mobile-toggle-open";
    }
    else {
      $scope.navMenuClass = "nav-menu-mobile-toggle"
    }
  };
}]);
