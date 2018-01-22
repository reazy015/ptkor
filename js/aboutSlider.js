'use strict';

window.aboutSlider = ( function () {
    var slider = document.querySelector('.main-about-slider');
    var nextBtn = slider.querySelector('.right');
    var prevBtn = slider.querySelector('.left');

    nextBtn.addEventListener('click', function () {
        console.log(true);
    });

    prevBtn.addEventListener('click', function () {
        console.log(true);
    })

    console.log(true);
})();