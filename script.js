'user strict';
// Code goes here

// create angular app
var app = angular.module('app', ['ngRoute']);

// create router provider
app.config(['$routeProvider', function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/first', {
        //templateUrl: 'first.html',
        controller: 'Controller'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);

app.controller('Controller', function($scope, $location, $http) {
});

