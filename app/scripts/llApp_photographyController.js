ll.llApp.controller('photographyController', function($scope, $routeParams, $http, $sce) {

  var section = $routeParams.section;

  $http.get("data/photography.json").then(function(response){

    var flickrSetId;
    for(var i = 0; i < response.data.albums.length; i++){
      var album = response.data.albums[i];
      if (album.name == section){
        flickrSetId = album.flickrId;
        break;
      }
    }

    var flickrUrl = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos"
                    + "&api_key=" + ll.config.flickr.apiKey
                    + "&photoset_id=" + flickrSetId
                    + "&user_id=" + encodeURIComponent(ll.config.flickr.userId)
                    + "&extras=url_m%2C+url_o"
                    + "&format=json"
                    + "&nojsoncallback=1";

    $http.get(flickrUrl).then(function(r){
        $scope.photos = mapPhotoJsonToModel(r.data.photoset.photo);
        setTimeout(function(){
          $("#gallery").unitegallery();
        }, 1000);
    });

  }, function(){
    console.log("error");
  });

  var mapPhotoJsonToModel = function(data){
    var photos = [];
    data.map(function(i,v){
      photos.push({
        title: i.title,
        thumbnailsrc: $sce.trustAsResourceUrl(i.url_m),
        imgsrc:$sce.trustAsResourceUrl(i.url_o)
      });
    });
    return photos;
  };

});

ll.llApp.directive("photolist", function(){
    return {
      templateUrl: 'template/photolist.html',
      link: function($scope, element, attrs){

      }
    };
});
