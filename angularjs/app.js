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
      templateUrl: "/views/home"
    })
    .state('about', {
      parent: "index",
      url: '/about',
      templateUrl: "/views/about"
    })
    .state('portfolio', {
      parent: "index",
      url: '/portfolio',
      templateUrl: "/views/portfolio"
    })
    .state('github', {
      parent: "index",
      url: '/github',
      templateUrl: "/views/github"
    })
    .state('contact', {
      parent: "index",
      url: '/contact',
      templateUrl: "/views/contact"
    })

});
