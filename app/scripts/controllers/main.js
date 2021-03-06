'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stockDogApp
 */
angular.module('stockDogApp')
  .controller('MainCtrl', function ($scope, $location, WatchlistService) {
    $scope.watchlists = WatchlistService.query();
      $scope.$watch(function() {
          return $location.path();
      }, function(path) {
          if(_.contains(path, 'watchlist')) {
              $scope.activeView = 'watchlist';
          } else {
              $scope.activeView = 'dashboard';
          }
      });
  });
