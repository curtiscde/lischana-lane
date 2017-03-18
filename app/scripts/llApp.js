'use strict';
var ll = ll || {};
ll.llApp = angular.module("llApp", ['ngRoute'])
.controller('mainController', function($scope, $route, $routeParams, $location, anchorSmoothScroll) {

  $scope.scrollTo = function(id) {
      //$anchorScroll.yOffset = $(".sticky-spacer").outerHeight(true);
      //$location.hash(id);
      anchorSmoothScroll.setOffset($(".sticky-spacer").outerHeight(true));
      anchorSmoothScroll.scrollTo(id);
   };

});
