var app = angular.module("myApp", []).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/views/about', { templateUrl: 'views/about', controller: getContentViews }).
      otherwise({redirectTo: '/'});
  }]);
