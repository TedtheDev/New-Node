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

  $scope.viewProjectsButtonClassName = 'project-menu-closed';
  $scope.changeViewProjectsButtonClass = function(className) {
    if(className == 'project-menu-closed')
      $scope.viewProjectsButtonClassName = 'project-menu-open';
    else
      $scope.viewProjectsButtonClassName = 'project-menu-closed';

  };

  //test code = doesnt work, trying to close view project menu when clicking on a project
  $scope.resetProjectMenu = function(booleanToggle) {
    booleanToggle = false;
    return booleanToggle;
  };
}]);

app.controller('animateBorder', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.theSVGClass = 'svg-animate-path-close';
  $scope.changeSVGAnimateClass = function(className) {
    if($scope.theSVGClass == 'svg-animate-path-close')
      $scope.theSVGClass = 'svg-animate-path-open';
    else
      $scope.theSVGClass = 'svg-animate-path-close';
  };

  //css border with background images with colors
  $scope.cssBorderClass = 'project-menu-nav-close';
  $scope.changeCSSBorderClass = function(className, projectMenuBool) {
    //var projectMenuElem = angular.element( document.querySelector( '#projectMenu' ) );
    //var projectMenuElemTemp = angular.element( document.querySelector( '.project-menu-nav-content' ) );
  //  projectMenuElem.empty();
    if($scope.cssBorderClass == 'project-menu-nav-close')
      $scope.cssBorderClass = 'project-menu-nav-open';
    else
      $scope.cssBorderClass = 'project-menu-nav-close';
  //  projectMenuElem.append(projectMenuElemTemp);
  };

  $scope.projectMenu = false;
  $scope.setDelay = function() {
    if($scope.projectMenu == true) {
      $timeout(function () {
        $scope.projectMenu = false;
      }, 300);
    }
    else {
      $scope.projectMenu = true;
    }
  };
}]);

//Controller for the about page
app.controller('aboutControllers', [ '$scope', '$state', function($scope, $state) {
  $scope.goToState = function(stateName) {
    $state.go(stateName);
  };
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
