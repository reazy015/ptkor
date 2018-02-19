'use strict';

window.onload = function () {
    $('.card-slider-list').slick({
        prevArrow: '<button class="about-left"><i class="fa fa-chevron-left fa-about" aria-hidden="true"></i></button>',
        nextArrow: '<button class="about-right"><i class="fa fa-chevron-right fa-about" aria-hidden="true"></i></button>',
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // $('.card-item-slider--type1').slick({
    //     prevArrow: '<button class="about-left"><i class="fa fa-chevron-left fa-about" aria-hidden="true"></i></button>',
    //     nextArrow: '<button class="about-right"><i class="fa fa-chevron-right fa-about" aria-hidden="true"></i></button>',
    //     dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true
    // });
}
