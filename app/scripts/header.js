ll.header = function(){

  var init = function(){

    logoPosition();

  };

  var logoPosition = function(){

    var $logo = $(".logo");
    var $logoText = $logo.find("a");

    $(window).on("scroll", function(){

      var wScrollTop = $(window).scrollTop();
      var logoTop = $logo.offset().top;

      $logoText.toggleClass("fixed", (logoTop <= wScrollTop));

    });

  };

  return init;
}();

$(function(){
  ll.header();
});
