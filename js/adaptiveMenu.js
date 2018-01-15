'use strict';

window.adaptiveMenu = (function () {
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

    function hideAllSubmenu() {
        var openSubmenus = document.querySelector('.submenu');
        if (openSubmenu) {
            console.log(true);
        } else {
            console.log(false);
        }
    }


    function submenuHandler(evt) {
    }

    menuToggleBtn.addEventListener('click', toggleMenu);
    mainNav.addEventListener('click', submenuHandler);
})()