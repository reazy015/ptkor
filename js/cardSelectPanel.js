'use strict';

window.cardSelectPanel = ( function () {
   var dropDown = document.querySelector('.select-panel-dropdown');
   var panelList = dropDown.querySelector('.select-panel-list');
   var selectPanelItems = dropDown.querySelectorAll('.select-panel-list__item');
   var currentSelect = document.querySelector('.select-panel-dropdown__selected');
   var cardsList = document.querySelectorAll('.card-item');

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
       currentSelect.textContent = target.textContent;

       if (target.classList.contains('select-panel-list__item')) {
           disableAllTabs();
           target.classList.add('select-panel-list__item--active');
       }

   }

   function disableAllActiveCards() {
       for (var i = 0; i < cardsList.length; i++ ) {
           cardsList[i].classList.remove('card-item--active');
       }
   }

   function openAppropriateItemCard(card) {
       for (var i = 0; i < cardsList.length; i++) {
           if (cardsList[i].dataset.cardType == card.dataset.cardType) {
               cardsList[i].classList.toggle('card-item--active');
           }
       }
   }

   panelList.addEventListener('click', function (evt) {
        var target = evt.target;
        if (target.classList.contains('select-panel-list__item')) {
            disableAllActiveCards();
            openAppropriateItemCard(target);
        }
   });
   dropDown.addEventListener('click', markAsActive);
   dropDown.addEventListener('click', openSubmenu);
})();
