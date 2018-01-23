'use strict'

window.aboutTabs = ( function () {
    var tabsNav = document.querySelector('.main-about-nav');
    var tabs = document.querySelectorAll('.main-about-nav__item');
    var sliders = document.querySelectorAll('[data-slider]');

    function disableActiveTab() {
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].classList.contains('main-about-nav__item--active')) {
                tabs[i].classList.remove('main-about-nav__item--active');
            }
        }
    }

    function disableActiveSliders() {
        for (var i = 0; i < sliders.length; i++) {
            sliders[i].style.display = 'none';
        }
    }

    function findAppropriateSlider(label) {
        for (var i = 0; i < sliders.length; i++) {
            if (sliders[i].dataset.slider == label) {
                return sliders[i];
            }
        }
    }

    function showAllTabs() {
        if (window.innerWidth < 830 ) {
            tabsNav.classList.toggle('main-about-nav--open');
        }
    }

    function openAppropriateSlider(e) {
        var target = e.target;
        if (target.classList.contains('main-about-nav__item')) {
            disableActiveTab();
            disableActiveSliders();
            target.classList.add('main-about-nav__item--active');
            findAppropriateSlider(target.dataset.sliderNav).style.display = 'block';
        }
    }
    console.log(sliders);
    tabsNav.addEventListener('click', openAppropriateSlider);
    tabsNav.addEventListener('click', showAllTabs);
})();