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

    $http.get("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=216973c8a63e3101968818cc48ddfa37&photoset_id=72157679280793261&user_id=81674685%40N04&extras=url_m%2C+url_o&format=json&nojsoncallback=1&api_sig=aae4cdaf0026eb49f8a5e86b8cab7ed2")
          .then(function(r){

            console.log(r.data.photoset.photo);

            $scope.photos = mapPhotoJsonToModel(r.data.photoset.photo);

            console.log($scope.photos);

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
