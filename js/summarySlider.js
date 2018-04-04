'use strict';

window.summarySlider = ( function() {
    var summarySlidesList = document.querySelectorAll('.main-summary-slider-item');
    var summaryIndicatorsList = document.querySelector('.main-summary-slider-indicators-list');
    var summarySlidesAddressesList = document.querySelectorAll('.main-summary-slider-comments__item');
    var summarySliderLeftControl = document.querySelector('.comments-control--left');
    var summarySliderRightControl = document.querySelector('.comments-control--right');
    var sliderStartIndex = 0;
    var indicatorsList;

    function getCurrentSlide(index) {
        if (index < 0) {
            sliderStartIndex = 0;
            return;
        }
        if (index >= summarySlidesList.length) {
            sliderStartIndex = summarySlidesList.length - 1;
            return;
        }
        return summarySlidesList[index];
    }

    function hideAllActiveSlides() {
        var activeSlides = document.querySelectorAll('.main-summary-slider-item--active');
        for (var i = 0; i < activeSlides.length; i++) {
            activeSlides[i].classList.remove('main-summary-slider-item--active');
        }
    }

    function hideAllActiveAddresses() {
        var currentActiveAdrList = document.querySelectorAll('.main-summary-slider-comments__item--active');

        for (var i = 0; i < currentActiveAdrList.length; i++) {
            currentActiveAdrList[i].classList.remove('main-summary-slider-comments__item--active');
        }
    }

    function disableAllActiveIndicators() {
        var currentActiveIndicator = document.querySelectorAll('.indicators-list-item--active');

        for (var i = 0; i < currentActiveIndicator.length; i++) {
            currentActiveIndicator[i].classList.remove('indicators-list-item--active');
        }
    }

    function switchFitIndicator(index) {
        var indicatorsList = summaryIndicatorsList.querySelectorAll('.indicators-list-item');

        disableAllActiveIndicators();
        indicatorsList[index].classList.add('indicators-list-item--active');
    }

    function showFitAddress(index) {
        hideAllActiveAddresses();
        summarySlidesAddressesList[index].classList.add('main-summary-slider-comments__item--active');
    }

    function showSlide(slide) {
        if (slide) {
            hideAllActiveSlides();
            slide.classList.add('main-summary-slider-item--active');
        } else {
            return;
        }
    }

    function showSlideByIndicatorsIndex(evt) {
        var target = evt.target;

        if (target.classList.contains('indicators-list-item')) {
           var index = Array.prototype.indexOf.call(indicatorsList, target);
           sliderStartIndex = index;
           disableAllActiveIndicators();
           showSlide(getCurrentSlide(index));
           target.classList.add('indicators-list-item--active');
        }
    }

    (function() {
        var listElement = document.createElement('li');
        listElement.classList.add('indicators-list-item');

        for (var i = 0; i < summarySlidesList.length; i++) {
            if ( i === 0) {
                var activeListElement = listElement.cloneNode(true);
                activeListElement.classList.add('indicators-list-item--active');
                summaryIndicatorsList.appendChild(activeListElement);
            } else {
                summaryIndicatorsList.appendChild(listElement.cloneNode(true));
            }
        }

        indicatorsList = document.querySelectorAll('.indicators-list-item');
    })();

    summarySliderLeftControl.addEventListener('click', function() {
        sliderStartIndex--;
        showSlide(getCurrentSlide(sliderStartIndex));
        switchFitIndicator(sliderStartIndex);
        showFitAddress(sliderStartIndex);
        console.log(sliderStartIndex);

    });
    summarySliderRightControl.addEventListener('click', function() {
        sliderStartIndex++;
        showSlide(getCurrentSlide(sliderStartIndex));
        switchFitIndicator(sliderStartIndex);
        showFitAddress(sliderStartIndex);
        console.log(sliderStartIndex);
    });
    summaryIndicatorsList.addEventListener('click', showSlideByIndicatorsIndex);
})();