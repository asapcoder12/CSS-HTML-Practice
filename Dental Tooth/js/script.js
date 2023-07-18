$(document).ready(function () {
    $('.hamburger').on('click', function() {
        $('.mobile-menu').addClass('is-active');
    })

    $('.mobile-menu-close').on('click', function() {  
        $('.mobile-menu').removeClass('is-active');
    });

    //Reviews Swipert Start

    const reviewsSwiper = new Swiper('.reviews-swiper', {
        loop: true,
        navigation: {
          nextEl: '.reviews-swiper .swiper-button-next',
          prevEl: '.reviews-swiper .swiper-button-prev',
        },
        speed: 1000
    });

    //Reviews Swipert End
    $('.header-button').magnificPopup(
        {
            type:'inline',
            removalDelay: 700,
            callbacks: {
                beforeOpen: function() {
                   this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
        });
});