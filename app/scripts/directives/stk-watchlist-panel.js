'use strict';

/**
 * @ngdoc directive
 * @name stockDogApp.directive:stkWatchlistPanel
 * @description
 * # stkWatchlistPanel
 */
angular.module('stockDogApp')
  .directive('stkWatchlistPanel', function ($location, $modal, WatchListService) {
    return {
      templateUrl: 'views/templates/watchlist-panel.html',
      restrict: 'E',
      scope: {},
      link: function ($scope) {
        $scope.watchlist = {};
        var addListModal = $modal({
          scope: $scope,
          template: 'views/templates/addlist-modal.html',
          show: false
        });
      }
    };
  });
