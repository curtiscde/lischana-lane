angular.module('ll', ['ll.tweet', 'lastfm-nowplaying'])
  .controller('mainCtrl', ['$scope', 'tweetService', function($scope, tweetService){

      tweetService.getTweet().then(function(data){
        $scope.tweet = data;
      });
      $scope.tweet = tweetService.getTweet();

      $scope.lastFmConfig = {
        apiKey: 'f3c3bb60dc23d1431a15c557e1db8de6',
        user: 'lvel',
        containerClass: 'container lastfm-content'
      };

  }])
  .directive('tweetdir', function(){
   return {
     template: '{{tweet}}'
   };
  });

angular.module('ll.tweet', [])
  .factory('tweetService', function($q, $http){

    var tweetUrl = 'https://lischana-lane-tweet.herokuapp.com/latest-tweet';

    var getTweet = function(){

      var defer = $q.defer();

      $http.get(tweetUrl).then(function(data){
        console.log(data);
      });

      defer.resolve('foo4');

      return defer.promise;
    }

    return {
      getTweet: getTweet
    };
  });
