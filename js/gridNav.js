'use strict';

window.gridNav = ( function () {
    var nav = document.querySelector('.grid-nav');
    var gridNav = document.querySelector('.grid-nav-list');
    var gridNavItems = gridNav.children;
    var gridSections = document.querySelectorAll('[data-section]');
    var gridNavItemInactive = gridNav.querySelectorAll('.grid-nav-list__item:not(.grid-nav-list__item--active)');
    var gridNavCurrent = nav.querySelector('.grid-nav__current-item');



    function openGridNavList() {
        gridNav.classList.toggle('grid-nav-list--open');
        if (gridNav.style.maxHeight) {
            gridNav.style.maxHeight = null;
        } else {
            gridNav.style.maxHeight = gridNav.scrollHeight + 'px';
        }
        nav.classList.toggle('grid-nav--open');

    }


    function removeAllActiveClass() {
        for (var i = 0; i < gridNavItems.length; i++) {
            if (gridNavItems[i].classList.contains('grid-nav-list__item--active')) {
                gridNavItems[i].classList.remove('grid-nav-list__item--active');
            }
        }
    }

    function openGridNav() {
        gridNav.classList.toggle('grid-nav--open');
        openGridNavList();
    }

    function closeAllSections() {
        for (var i = 0; i < gridSections.length; i++) {
             gridSections[i].style.display = 'none';
        }
    }

    function openAppropriateSection(label) {
        for (var i = 0; i < gridSections.length; i++) {
            if (gridSections[i].dataset.section == label) {
                gridSections[i].style.display = 'block';
            }
        }


    }

    function markAsActive(e) {
        if (!e.target.classList.contains('grid-nav-list__item--active')) {
            removeAllActiveClass();
            e.target.classList.add('grid-nav-list__item--active');
            closeAllSections();
            openAppropriateSection(e.target.dataset.nav);
            gridNavCurrent.textContent = e.target.textContent;
        }
    }

    console.log(gridSections);
    gridNav.addEventListener('click', openGridNav);
    gridNav.addEventListener('click', markAsActive);
    gridNavCurrent.addEventListener('click', openGridNavList);

})();