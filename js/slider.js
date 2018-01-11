'use strict';

window.slider = (function () {
  var slider = document.querySelector('.page-header-slider');
  var sliderList = slider.querySelector('.slider-list');
  var prevBtn = slider.querySelector('.slider-btn--prev');
  var nextBtn = slider.querySelector('.slider-btn--next');

  function showPrevSlide() {
    sliderList.style.transform = 'translate(-100%)';
  }

  function showNextSlide() {
    sliderList.style.transform = 'translate(0%)';
  }

  prevBtn.addEventListener('click', showPrevSlide);
  nextBtn.addEventListener('click', showNextSlide)

})();
