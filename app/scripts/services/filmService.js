ll.llApp.service('filmService', function($http){

  this.getFilmData = function(success){

    $http.get("data/film.json").then(function(response){
      success(response);
    }, function(){
      console.log("error");
    });

  };

});
