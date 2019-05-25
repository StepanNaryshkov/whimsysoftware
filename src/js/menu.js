$( "#hamburger" ).click(function() {
    $('body').toggleClass('menu-open')
});

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll >= 5) {
        $('body').addClass('fixed')
    } else {
        $('body').removeClass('fixed')
    }
});
