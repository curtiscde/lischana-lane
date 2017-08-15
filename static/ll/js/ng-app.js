angular.module('ll', ['ll.tweet', 'lastfm-nowplaying', 'ngSanitize'])
  .controller('mainCtrl', ['$scope', '$sce', 'tweetService', function($scope, $sce, tweetService){

      tweetService.getTweet().then(function(data){
        $scope.tweet = $sce.trustAsHtml(data);
      });

      $scope.lastFmConfig = {
        apiKey: 'f3c3bb60dc23d1431a15c557e1db8de6',
        user: 'lvel',
        containerClass: 'container lastfm-content'
      };

  }]);

angular.module('ll.tweet', [])
  .factory('tweetService', function($q, $http){

    var tweetUrl = 'https://lischana-lane-tweet.herokuapp.com/latest-tweet';

    var getTweet = function(){

      var defer = $q.defer();

      $http.get(tweetUrl).then(function(data){
        defer.resolve(data.data.tweet.html);
      });

      return defer.promise;
    }

    return {
      getTweet: getTweet
    };
  });
