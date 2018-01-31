'use strict';

window.asideMenu = ( function () {
  var asideToggleBtn = document.querySelector('.aside-nav-toggle');
  var asideMenu = document.querySelector('.aside-nav');
  var asideNavList = asideMenu.querySelector('.aside-nav-list');

  function toggleAsideMenu(e) {
    if (e.target == asideToggleBtn) {
      asideMenu.classList.toggle('aside-nav--open');
      window.addEventListener('click', closeAsideOnOutsideClick);
    }
  }

  function closeAsideOnOutsideClick(e) {
    if (e.target != asideToggleBtn) {
      asideMenu.classList.remove('aside-nav--open');
      window.removeEventListener('click', toggleAsideMenu);
    }
  }

  function openAsideNavList() {
    if (window.innerWidth < 830) {
      asideNavList.classList.toggle('aside-nav-list--open');
    }
  }


  asideToggleBtn.addEventListener('click', toggleAsideMenu);
  asideMenu.addEventListener('click', openAsideNavList);

})()
