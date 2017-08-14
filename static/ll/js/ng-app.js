angular.module('ll', ['lastfm-nowplaying'])
  .controller('mainCtrl', ['$scope', function($scope){

      $scope.lastFmConfig = {
        apiKey: 'f3c3bb60dc23d1431a15c557e1db8de6',
        user: 'lvel',
        containerClass: 'container lastfm-content'
      };

  }]);
