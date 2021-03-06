var eClick = (function() {
  if ('ontouchstart' in document.documentElement === true)
    return 'touchstart';
  else
    return 'click';
})();


$(function(){
  // Detect user agent & show no-support message if IE
  let userAgent = window.navigator.userAgent.toLowerCase();
  if(userAgent.indexOf('msie') != -1) {
    $("#no-support").addClass("show");
  }

  $(document).on(eClick, "#fullscreen", function(e){
    $.when(
      $("#cover").fadeIn("fast")
    ).done(function() {
      $.when(
        $("body").addClass("fullscreen")
      ).done(function() {
        $("#cover").fadeOut("fast");
      });
    });
  });

  $(document).on(eClick, "#button-close", function(e){
    e.preventDefault();
    e.stopPropagation();
    $.when(
      $("#cover").fadeIn("fast")
    ).done(function() {
      $.when(
        $("body").removeClass("fullscreen")
      ).done(function() {
        $("#cover").fadeOut("fast");
      });
    });
  });
});
