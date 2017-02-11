'use strict';

var llApp = angular.module("llApp", ['ngRoute'])

.controller('MainController', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
})

.controller('FilmController', function($scope, $routeParams) {
    $scope.name = 'FilmController';
    $scope.params = $routeParams;
})

.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('film', {
    templateUrl: 'film.html',
    controller: 'FilmController',
    resolve: {
      // I will cause a 1 second delay
      delay: function($q, $timeout) {
        var delay = $q.defer();
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
    }
  });

  $locationProvider.html5Mode({
    enabled: true
  });
});
