$(document).ready(function () {
    $('.hamburger').on('click', function() {
        $('.mobile-menu').addClass('is-active');
    })

    $('.mobile-menu-close').on('click', function() {  
        $('.mobile-menu').removeClass('is-active');
    });
});