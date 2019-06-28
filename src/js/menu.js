$( "#hamburger" ).click(function() {
    $('body').toggleClass('menu-open')
});

function handleFixedMenu() {
    var scroll = $(window).scrollTop();
    if (scroll >= 5) {
        $('body').addClass('fixed')
    } else {
        $('body').removeClass('fixed')
    }
}

handleFixedMenu();

$(window).scroll(function(){
    handleFixedMenu()
});

$( ".nav__list" ).click(function(e) {
    if (e.target.className === 'nav__list') {
        $('body').removeClass('menu-open')
    }
});
