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

llApp.controller('filmController', function($scope, $http, $timeout, $sce) {

  $http.get("data/film.json").then(function(response){
    console.log(response.data.films); //TODO: Remove

    $scope.films = mapFilmJsonToModel(response.data.films);

  }, function(){
    console.log("error");
  });

  var mapFilmJsonToModel = function(data){
    var films = [];
    for(let i = 0; i<data.length; i++){
      let film = data[i];
      films.push({
        src: $sce.trustAsResourceUrl(film.src)
      });
    }
    return films;
  };

});
