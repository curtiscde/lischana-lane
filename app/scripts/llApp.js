'use strict';
var ll = ll || {};
ll.llApp = angular.module("llApp", ['ngRoute'])
.controller('mainController', function($scope, $route, $routeParams, $location, $anchorScroll) {

  $scope.scrollTo = function(id) {
      $anchorScroll.yOffset = $(".sticky-spacer").outerHeight(true);
      $location.hash(id);
      $anchorScroll();
   };

});
