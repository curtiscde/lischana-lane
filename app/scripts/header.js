ll.header = function(){

  var init = function(){

    logoPosition();

  };

  var logoPosition = function(){

    var $sticky = $(".sticky");
    var stickyTop = $sticky.offset().top;
    var $stickySpacer = $(".sticky-spacer");

    $(window).on("scroll", function(){
      var wScrollTop = $(window).scrollTop();

      var stickyOffScreen = false;

      if(stickyTop <= wScrollTop){
        stickyOffScreen = true;
        $stickySpacer.height($sticky.outerHeight(true));
      }

      $sticky.toggleClass("fixed", stickyOffScreen);
      $stickySpacer.toggleClass("show", stickyOffScreen);

    });

  };

  return init;
}();

$(function(){
  ll.header();
});
