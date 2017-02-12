'use strict';

var llApp = angular.module("llApp", ['ngRoute'])

.controller('mainController', function($scope, $route, $routeParams, $location) {

});

// configure our routes
llApp.config(function($routeProvider) {
  $routeProvider

    .when('/', {
      templateUrl : 'home.html',
      controller  : 'mainController'
    })

    .when('/film', {
      templateUrl : 'film.html',
      controller  : 'filmController'
    });

});

llApp.controller('filmController', function($scope, $http, $timeout) {

  $http.get("data/film.json").then(function(response){
    console.log(response.data.films); //TODO: Remove

    $scope.films = response.data.films;

  }, function(){
    console.log("error");
  });

});
