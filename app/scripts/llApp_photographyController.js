ll.llApp.controller('photographyController', function($scope, $routeParams, $http, $sce) {

  $http.get("data/photography.json").then(function(response){

    var selectedSection = response.data.albums[0].name;
    $scope.selectedSection = selectedSection;

    $scope.sections = response.data.albums;

    $scope.loadSectionList(selectedSection);

  }, function(){
    console.log("error");
  });

  $scope.$watch("photos", function(){
    var $buffer = $(".buffer");
    var $gallery = $("#gallery");

    setTimeout(function(){
      if ($buffer.find("img").length){
        $gallery.empty().append($buffer.html());
        $gallery.unitegallery();
      }
    }, 1000);

  });

  $scope.loadSectionList = function(section){

    var flickrSetId;
    for(var i = 0; i < $scope.sections.length; i++){
      var album = $scope.sections[i];
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
    });
  }




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

ll.llApp.directive("photoview", function(){
    return {
      templateUrl: 'photography.html',
      link: function($scope, element, attrs){
      }
    };
});
