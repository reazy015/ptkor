'use strict'

window.aboutTabs = ( function () {
    var tabsNav = document.querySelector('.main-about-nav');
    var tabs = document.querySelectorAll('.main-about-nav__item');
    var sliders = document.querySelectorAll('[data-slider]');
    var tabsDropDown = document.querySelector('.main-about-dropdown');
    var tabsDropDownCurrentItem = document.querySelector('.main-about-dropdown__current');

    function toggleDropDown() {
        if (window.innerWidth < 830) {
            tabsNav.classList.toggle('main-about-nav--open');
        }
    }

    function disableActiveTab() {
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].classList.contains('main-about-nav__item--active')) {
                tabs[i].classList.remove('main-about-nav__item--active');
            }
        }
    }

    function disableActiveSliders() {
        for (var i = 0; i < sliders.length; i++) {
            sliders[i].classList.remove('main-about-slider--active');
        }
    }

    function findAppropriateSlider(label) {
        for (var i = 0; i < sliders.length; i++) {
            if (sliders[i].dataset.slider == label) {
                return sliders[i];
            }
        }
        console.log(sliders);
    }

    function setCurrentDataVelue(currentValue) {
        tabsDropDownCurrentItem.textContent = currentValue.textContent;
    }

    function openAppropriateSlider(e) {
        var target = e.target;
        if (target.classList.contains('main-about-nav__item')) {
            disableActiveTab();
            disableActiveSliders();
            target.classList.add('main-about-nav__item--active');
            findAppropriateSlider(target.dataset.sliderNav).classList.add('main-about-slider--active');
            setCurrentDataVelue(target);
            toggleDropDown();
        }
    }
    console.log(sliders);
    tabsNav.addEventListener('click', openAppropriateSlider);
    tabsDropDownCurrentItem.addEventListener('click', toggleDropDown);
})();