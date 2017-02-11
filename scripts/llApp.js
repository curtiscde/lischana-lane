'use strict';

var llApp = angular.module("llApp", ['ngRoute']);

llApp.controller("llCtrl", function($scope, $http){

});

llApp.config(function ($routeProvider,  $locationProvider) {
    // configure the routes

    $routeProvider
    .when('/', {
    // route for the home page
        templateUrl: 'home.html',
        controller: 'homeController'
    })

    .when('/about', {
    // route for the about page
        templateUrl: 'about.html',
        controller: 'aboutController'
    })
    .otherwise({
        templateUrl: 'routeNotFound.html',
       controller: 'notFoundController'
    });

    $locationProvider.html5Mode(true);

});

llApp.controller("homeController", function($scope, $http, $route){


});
