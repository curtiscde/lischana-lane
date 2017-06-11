ll.llApp.service('filmService', function($http, $sce){

  this.getFilmData = function(success){

    $http.get("data/film.json").then(function(response){
      success(response);
    }, function(){
      console.log("error");
    });

  };

  this.mapFilmJsonToModel = function(data){
    var films = [];
    for(let i = 0; i<data.length; i++){
      let film = data[i];
      films.push({
        name: film.name,
        src: $sce.trustAsResourceUrl(film.src),
        videoid: film.videoid,
        type: film.type
      });
    }
    return films;
  };

});
