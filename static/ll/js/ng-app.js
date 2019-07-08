angular.module('ll', ['ll.tweet', 'ngSanitize'])	
  .controller('mainCtrl', ['$scope', '$sce', 'tweetService', function($scope, $sce, tweetService){	

       tweetService.getTweet().then(function(data){	
        $scope.tweet = $sce.trustAsHtml(data);	
      });

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
