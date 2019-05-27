$(document).ready(function(){
  $( ".nav__link" ).click(function( event ) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500, function() {
      $('body').removeClass('menu-open')
    });
  });
});
