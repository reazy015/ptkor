'use strict';

window.cardSelectPanel = ( function () {
   var dropDown = document.querySelector('.select-panel-dropdown');
   var panelList = dropDown.querySelector('.select-panel-list');
   var selectPanelItems = dropDown.querySelectorAll('.select-panel-list__item');

   function disableAllTabs() {
       for (var i = 0; i < selectPanelItems.length; i++) {
           selectPanelItems[i].classList.remove('select-panel-list__item--active');
       }
   }

   function openSubmenu() {
       if (window.innerWidth < 830) {
            dropDown.classList.toggle('select-panel-dropdown--open');
       }
   }

   function markAsActive(evt) {
       var target = evt.target;
       if (target.classList.contains('select-panel-list__item')) {
           disableAllTabs();
           target.classList.add('select-panel-list__item--active');
       }
   }

   dropDown.addEventListener('click', markAsActive);
   dropDown.addEventListener('click', openSubmenu);
})();
