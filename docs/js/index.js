function handleFixedMenu(){$(window).scrollTop()>=5?$("body").addClass("fixed"):$("body").removeClass("fixed")}$(document).ready(function(){$(".nav__link").click(function(e){e.preventDefault(),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},500,function(){$("body").removeClass("menu-open")})})}),$("#hamburger").click(function(){$("body").toggleClass("menu-open")}),handleFixedMenu(),$(window).scroll(function(){handleFixedMenu()});