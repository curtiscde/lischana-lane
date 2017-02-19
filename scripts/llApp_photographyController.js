llApp.controller('photographyController', function($scope, $routeParams, $http, $sce) {

  var section = $routeParams.section;

  $http.get("data/photography.json").then(function(response){

    $scope.photos = mapPhotoJsonToModel(response.data.photos, section);

    $(".carousel").slick();

    console.log($scope.photos); //TODO: Remove

  }, function(){
    console.log("error");
  });

  var mapPhotoJsonToModel = function(data, section){
    var photos = [];
    data.filter(function(photo){
      return photo.sections.indexOf(section)>=0;
    }).map(function(i,v){
      photos.push({
        file:"images/photography/" + i.file
      });
    });
    return photos;
  };

});
