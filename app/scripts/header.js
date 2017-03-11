ll.header = function(){

  var init = function(){

    logoPosition();

  };

  var logoPosition = function(){

    var $logo = $(".logo");
    var $logoText = $logo.find("a");
    var logoTop = $logo.offset().top;

    $(window).on("scroll", function(){
      var wScrollTop = $(window).scrollTop();

      var logoOffScreen = false;

      if(logoTop <= wScrollTop){
        logoOffScreen = true;
        $(".logo-spacer").height($logo.outerHeight(true));
      }

      $(".logo-spacer").toggleClass("show", logoOffScreen);
      $logo.toggleClass("fixed", logoOffScreen);

    });

  };

  return init;
}();

$(function(){
  ll.header();
});
