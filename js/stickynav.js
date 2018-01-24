'use strict';

window.stickyNav = (function () {
    var body = document.body;
    var header = document.querySelector('.page-header');
    var menuList = document.querySelector('.nav-list');
    var menuToggleBtn = document.querySelector('.nav-toggle');
    var mainNav = document.querySelector('.nav-list');
    var headerOffsetTop = header.offsetHeight;

    function toggleMenu() {
        menuList.classList.toggle('nav-open');
    }


    function fixHeader() {
        if(window.pageYOffset  > headerOffsetTop && !menuList.classList.contains('nav-open')) {
            body.style.paddingTop = headerOffsetTop + 'px';
            header.classList.add('header-sticky');
        } else {
            header.classList.remove('header-sticky');
            body.style.paddingTop = 0;
        }
    }


    document.addEventListener('scroll', fixHeader);
    menuToggleBtn.addEventListener('click', toggleMenu);
})()
