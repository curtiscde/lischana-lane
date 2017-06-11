ll.llApp.controller('filmController', function($scope, $http, $timeout, filmService) {

  filmService.getFilmData(function(response){
    console.log(response.data.films); //TODO: Remove

    $scope.films = filmService.mapFilmJsonToModel(response.data.films);

    setTimeout(function(){
      $("#film-list.list.loading").removeClass("loading");
      $("#film-list").unitegallery();
    },2000);

  });

});

ll.llApp.directive("filmview", function($timeout){
    return {
      templateUrl: 'film.html',
      link: function($scope, element, attrs){

      }
    };
});
