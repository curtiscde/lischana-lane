ll.header = function(){

  var init = function(){

    headerPosition();

    var myElement = document.querySelector(".sticky");
    // construct an instance of Headroom, passing the element
    var headroom  = new Headroom(myElement);
    // initialise
    headroom.init();

  };

  var headerPosition = function(){

    var $sticky = $(".sticky");
    var stickyTop = $sticky.offset().top;
    var $stickySpacer = $(".sticky-spacer");

    setStickySpacerHeight($stickySpacer, $sticky);

    $(window).on("scroll", function(){
      var wScrollTop = $(window).scrollTop();

      var stickyOffScreen = false;

      if(stickyTop <= wScrollTop){
        stickyOffScreen = true;
        setStickySpacerHeight($stickySpacer, $sticky);
      }

    });

  };

  var setStickySpacerHeight = function($stickySpacer, $sticky){
    $stickySpacer.height($sticky.outerHeight(true));
  }

  return init;
}();

$(function(){
  ll.header();
});
