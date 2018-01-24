'use strict';

window.adaptiveMenu = (function () {
    var header = document.querySelector('.header');
    var menuList = document.querySelector('.nav-list');
    var menuToggleBtn = document.querySelector('.nav-toggle');
    var mainNav = document.querySelector('.nav-list');

    function toggleMenu() {
        if (menuList.classList.contains('nav-open')) {
            menuList.classList.toggle('nav-open');
        } else {
            menuList.classList.toggle('nav-open');
        }

    }

    menuToggleBtn.addEventListener('click', toggleMenu);
})()