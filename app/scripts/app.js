'use strict';

/**
 * @ngdoc overview
 * @name stockDogApp
 * @description
 * # stockDogApp
 *
 * Main module of the application.
 */
angular
  .module('stockDogApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });
