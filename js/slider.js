'use strict';

window.slider = (function () {
    var slider = document.querySelector('.slider-main');
    var items = slider.querySelectorAll('.slider-list-item');
    var slidersList = slider.querySelector('.slider-list');
    var nextBtn = slider.querySelector('.right');
    var prevBtn = slider.querySelector('.left');
    var dots = slider.querySelectorAll('.slider-indicators__item');
    var currentItem = 0;

    function disableAllDots() {
        for (var i = 0; i < dots.length; i++) {
            dots[i].classList.remove('slider-indicators__item--active');
        }
    }

    function markDot(n) {
        dots[n].classList.add('slider-indicators__item--active');
    }

    function goToCurrentSlide(n) {
        return function() {
            currentItem = n;
            disableAllDots();
            markDot(currentItem);
            slidersList.style.transform = 'translate(-' + currentItem + '00%)';
        }
    }

    function nextSlide() {
        disableAllDots();
        currentItem++;
        if (currentItem > items.length - 1) {
            currentItem = 0;
            slidersList.style.transform = 'translate(-' + currentItem + '00%)';
        } else {

            slidersList.style.transform = 'translate(-' + currentItem + '00%)';
        }
        markDot(currentItem);
    }

    function prevSlide() {
      disableAllDots();
      currentItem--;
      if (currentItem < 0 ) {
          currentItem = items.length - 1;

          slidersList.style.transform = 'translate(-' + currentItem + '00%)';
      } else {

          slidersList.style.transform = 'translate(-' + currentItem + '00%)';
      }
      markDot(currentItem);
    }

    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', goToCurrentSlide(i));
    }

    nextBtn.addEventListener('click', function () {
        nextSlide();
    })

    prevBtn.addEventListener('click', function () {
      prevSlide();
    })
})();
