import * as $ from 'jquery';

// Open and Close Hamburger Menu
$("#mobile-menu").hide();

$("#hamburger").click(() => {
    $("#mobile-menu").animate({
        height: "toggle"
    }, 1000);
})

$("#close-icon").click(() => {
    $("#mobile-menu").animate({
        height: "toggle"
    }, 1000);
})

