'use strict';
var ll = ll || {};
ll.llApp = angular.module("llApp", ['ngRoute'])

.controller('mainController', function($scope, $route, $routeParams, $location) {

});

// // configure our routes
// ll.llApp.config(function($routeProvider) {
//   $routeProvider
//
//     .when('/', {
//       templateUrl : 'home.html',
//       controller  : 'mainController'
//     })
//
//     .when('/film', {
//       templateUrl : 'film.html',
//       controller  : 'filmController'
//     })
//
//     .when('/photography/:section', {
//       templateUrl : 'photography.html',
//       controller  : 'photographyController'
//     });
//
// });
