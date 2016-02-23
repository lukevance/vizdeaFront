'use strict';
angular.module('vizdea', ['ngRoute'])

.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainController as MC'
    })
    .when('/newViz', {
      templateUrl: 'views/newViz.html',
      controller: 'NewVizions as NV'
    });
});
