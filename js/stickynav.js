'use strict';

window.stickyNav = (function () {
    var body = document.body;
    var header = document.querySelector('.page-header');
    var headerOffsetTop = header.offsetHeight;

    function fixHeader() {
        if(window.pageYOffset  > headerOffsetTop) {
            body.style.paddingTop = headerOffsetTop + 'px';
            header.classList.add('header-sticky');
        } else {
            header.classList.remove('header-sticky');
            body.style.paddingTop = 0;
        }
    }

    document.addEventListener('scroll', fixHeader);
})()