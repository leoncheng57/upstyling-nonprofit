import * as $ from 'jquery';

// Open and Close Hamburger Menu
$("#mobile-menu").hide();

$("#hamburger").click(() => {
    $("#mobile-dark-overlay").fadeIn(500);
    $("#mobile-menu").animate({
        height: "toggle"
    }, 1000);
})

$("#close-icon").click(() => {
    $("#mobile-dark-overlay").fadeOut(1500);
    $("#mobile-menu").animate({
        height: "toggle"
    }, 1000);
})

