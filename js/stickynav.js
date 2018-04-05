'use strict';

window.stickyNav = (function () {
    var pageHeader = document.querySelector('.page-header');
    var stickyAdditionalNav = pageHeader.querySelector('.page-header-additional-nav-container');

    function fixAdditionalNav() {
        if (window.pageYOffset > pageHeader.offsetHeight) {
            stickyAdditionalNav.classList.add('page-header-additional-nav-container--fixed');
        } else {
            stickyAdditionalNav.classList.remove('page-header-additional-nav-container--fixed');
        }
    }

    document.addEventListener('scroll', fixAdditionalNav);

    var body = document.body;
    var header = document.querySelector('.page-header');
    var menuList = document.querySelector('.nav-list');
    var menuToggleBtn = document.querySelector('.nav-toggle');
    var mainNav = document.querySelector('.nav-list');
    var submenuList = document.querySelectorAll('.submenu');
    var headerOffsetTop = header.offsetHeight;


    function toggleMenu() {
        menuToggleBtn.classList.toggle('nav-toggle--open');
        pageHeader.classList.toggle('page-header--nav-open');


        body.classList.toggle('no-scroll');
    }


    function fixHeader() {
        if(window.pageYOffset  > headerOffsetTop && window.innerWidth < 830) {
            body.style.paddingTop = headerOffsetTop + 'px';
            header.classList.add('header-sticky');
        } else {
            header.classList.remove('header-sticky');
            body.style.paddingTop = 0;
        }
    }

    function closeAllSubs() {
        for (var i = 0; i < submenuList.length; i++) {
            if (submenuList[i].style.maxHeight) {
                submenuList[i].style.maxHeight = null;
                submenuList[i].closest('.nav-list-item').classList.toggle('nav-list-item--active');
            }
        }
    }

    function openSubmenu(evt) {
        var target = evt.target;

        if (target.classList.contains('nav-list-item--has-sub') && window.innerWidth < 830) {
            target.classList.toggle('nav-list-item--active');
            var child = target.querySelector('.submenu')
            if (child.style.maxHeight) {
                child.style.maxHeight = null;
            } else {
                closeAllSubs();
                child.style.maxHeight = child.scrollHeight + 'px';
            }
        }
    }

    mainNav.addEventListener('click', openSubmenu);
    document.addEventListener('scroll', fixHeader);
    menuToggleBtn.addEventListener('click', toggleMenu);
})()
