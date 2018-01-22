'use strict'

window.aboutTabs = ( function () {
    var aboutSlidersList = document.querySelectorAll('[data-label]');
    var aboutNav = document.querySelector('.main-about-nav');

    function hideSliders() {
        for (var i = 0; i < aboutSlidersList.length; i++) {
            aboutSlidersList[i].style.display = 'none';
            aboutSlidersList[i].style.backgrounColor = 'red';
        }
    }

    aboutNav.addEventListener('click', function (e) {
        var target = e.target;
        var targetId = target.id;


        hideSliders();

        for (var i = 0; i < aboutSlidersList.length; i++) {
            if (targetId === aboutSlidersList[i].dataset.label) {
               aboutSlidersList[i].style.display = 'block';
            }
        }
    });
})()