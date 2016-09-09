var app = angular.module("myApp", ['ngAnimate','ui.router']);

app.config(function($stateProvider) {
  $stateProvider
    .state('index',  {
      url: "",
      views: {
        "index": {
          templateUrl: "/views/indexContent"
        },
        "mobileMenu": {
          templateUrl: "/views/mobileMenu"
        }
      }
    })
    .state('home', {
      parent: "index",
      url: '/home',
      views: {
        "content": {
          templateUrl: "/views/home"
        }
      }
    })
    .state('about', {
      parent: "index",
      url: '/about',
      views: {
        "content": {
          templateUrl: "/views/about"
        }
      }
    })
    .state('portfolio', {
      parent: "index",
      url: '/portfolio',
      views: {
        "content": {
          templateUrl: "/views/portfolio"
        }
      }
    })
    .state('github', {
      parent: "index",
      url: '/github',
      views: {
        "content": {
          templateUrl: "/views/github"
        }
      }
    })
    .state('contact', {
      parent: "index",
      url: '/contact',
      views: {
        "content": {
          templateUrl: "/views/contact"
        }
      }
    })
    .state('firstWebsite', {
      parent: "portfolio",
      url: '/firstwebsite',
      views: {
        "loadProject": {
          templateUrl: "/projects/firstWebsite"
        }
      }
    })
    .state('wordpress', {
      parent: "portfolio",
      url: '/webcontent',
      views: {
        "loadProject": {
          templateUrl: "/projects/wordpress"
        }
      }
    })
    .state('esss', {
      parent: "portfolio",
      url: '/esss',
      views: {
        "loadProject": {
          templateUrl: "/projects/esssProject"
        }
      }
    })
    .state('payrollSystem', {
      parent: "portfolio",
      url: '/payrollsystem',
      views: {
        "loadProject": {
          templateUrl: "/projects/payrollSystem"
        }
      }
    })
    .state('lampProject', {
      parent: "portfolio",
      url: '/lampproject',
      views: {
        "loadProject": {
          templateUrl: "/projects/lampProject"
        }
      }
    })
    .state('lanProject', {
      parent: "portfolio",
      url: '/lanproject',
      views: {
        "loadProject": {
          templateUrl: "/projects/lanProject"
        }
      }
    })
    .state('nodeWebsite', {
      parent: "portfolio",
      url: '/nodewebsite',
      views: {
        "loadProject": {
          templateUrl: "/projects/nodeWebsite"
        }
      }
    })
});
