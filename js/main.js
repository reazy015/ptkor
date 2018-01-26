

window.onload = function () {

    $('.slider-list--about').slick({

            prevArrow: '<button class="about-left"><i class="fa fa-chevron-left fa-about" aria-hidden="true"></i></button>',
            nextArrow: '<button class="about-right"><i class="fa fa-chevron-right fa-about" aria-hidden="true"></i></button>',
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        })
}
