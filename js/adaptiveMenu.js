'use strict';

window.adaptiveMenu = (function () {
    var menuList = document.querySelector('.nav-list');
    var menuToggleBtn = document.querySelector('.nav-toggle');

    function toggleMenu () {
       menuList.classList.toggle('nav-open');
    }

    menuToggleBtn.addEventListener('click', toggleMenu);

})()