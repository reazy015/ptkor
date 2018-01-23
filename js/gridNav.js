'use strict';

window.gridNav = ( function () {
    var gridNav = document.querySelector('.grid-nav-list');
    var gridNavItems = gridNav.children;
    var gridNavItemInactive = gridNav.querySelectorAll('.grid-nav-list__item:not(.grid-nav-list__item--active)');


    function removeAllActiveClass() {
        for (var i = 0; i < gridNavItems.length; i++) {
            if (gridNavItems[i].classList.contains('grid-nav-list__item--active')) {
                gridNavItems[i].classList.remove('grid-nav-list__item--active');
            }
        }
    }

    function openGridNav() {
        gridNav.classList.toggle('grid-nav--open');
    }


    function markAsActive(e) {
        if (!e.target.classList.contains('grid-nav-list__item--active')) {
            removeAllActiveClass();
            e.target.classList.add('grid-nav-list__item--active');

        }
    }

    gridNav.addEventListener('click', openGridNav);
    gridNav.addEventListener('click', markAsActive);

})();