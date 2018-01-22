'use strict';

window.slider = (function () {
    var slider = document.querySelector('.slider-main');
    var items = slider.querySelectorAll('.slider-list-item');
    var slidersList = slider.querySelector('.slider-list');
    var nextBtn = slider.querySelector('.right');
    var prevBtn = slider.querySelector('.left');
    var dots = document.querySelectorAll('.slider-indicators li');
    var currentItem = 0;
    createRadioBtns();

    function nextSlide() {
        currentItem++;
        if (currentItem > items.length - 1) {
            currentItem = 0;
            radioCheck(currentItem);
            slidersList.style.transform = 'translate(-' + currentItem + '00%)';
        } else {
            radioCheck(currentItem);
            slidersList.style.transform = 'translate(-' + currentItem + '00%)';
        }

        radioCheck(currentItem);

    }

    function prevSlide() {
      currentItem--;
      if (currentItem < 0 ) {
          currentItem = items.length - 1;
          radioCheck(currentItem);
          slidersList.style.transform = 'translate(-' + currentItem + '00%)';
      } else {
          radioCheck(currentItem);
          slidersList.style.transform = 'translate(-' + currentItem + '00%)';
      }

    }

    function showCurrentSlide(slideNumber) {
        return function() {
            slidersList.transform.translate = 'translate(-' + slideNumber + '00%)';
        }
    }

    function createRadioBtns() {
        for (var i = 0; i < items.length; i++) {
            var label = document.createElement('label');
            var input = document.createElement('input');

            if (i === 0) {
                input.setAttribute('checked', true);
            }

            input.setAttribute('type', 'radio');
            input.setAttribute('name', 'slider');
            input.setAttribute('data-slider', i);
            input.classList.add('slider-controls')
            label.classList.add('slider-controls-labels');
            label.appendChild(input);
            slider.appendChild(label);
        }
    }

    function radioCheck(id) {
        var radioList = document.querySelectorAll('[data-slider]');
        var radio = document.querySelector("[data-slider=" + '\'' + id + '\']');

        for (var i = 0; i < radioList.length; i++) {
            radioList[i].setAttribute('checked', false);
        }

        radio.setAttribute('checked', true);
    }





    nextBtn.addEventListener('click', function () {
        nextSlide();
    })

    prevBtn.addEventListener('click', function () {
      prevSlide();
    })
})();
