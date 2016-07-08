var app = angular.module("myApp", ['ngRoute']);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/views/about', {
        templateUrl: 'views/about',
        controller: 'getContentViews' }).
      otherwise({redirectTo: '/'});
  }]);
