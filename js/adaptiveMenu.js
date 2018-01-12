'use strict';

window.adaptiveMenu = (function () {
    var menuList = document.querySelector('.nav-list');
    var menuToggleBtn = document.querySelector('.nav-toggle');
    var mainNav = document.querySelector('.nav-list');

    function toggleMenu() {
       menuList.classList.toggle('nav-open');
       menuList.classList.toggle('animation-nav');
    }

    function hideAllSubmenu() {
        document.querySelectorAll('.submenu').forEach(function(item){
            item.style.display = 'none';
        })
    }


    function submenuHandler(evt) {
        var target = evt.target;

        if (target.classList.contains('nav-list-item--has-sub') && mainNav.classList.contains('nav-open')) {
            var childSubmenu = target.querySelector('.submenu');
            hideAllSubmenu();
            childSubmenu.style.display = 'block';
        } else {
            hideAllSubmenu();
        }
    }

    menuToggleBtn.addEventListener('click', toggleMenu);
    mainNav.addEventListener('click', submenuHandler);
})()