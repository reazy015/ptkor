'use strict';

window.modalPopup = ( function () {
    var popup = document.querySelector('.popup');
    var popupModal = popup.querySelector('.popup-modal');
    var popupModalCloseBtn = popupModal.querySelector('.popup-modal-close');
    var callbackOrder = document.querySelectorAll('.callback__order');

    function openClosePopup(evt) {
        evt.preventDefault();
        popup.classList.toggle('popup--open');
    }

    for (var i = 0; i < callbackOrder.length; i++) {
        callbackOrder[i].addEventListener('click', openClosePopup);
    }

    popupModalCloseBtn.addEventListener('click', openClosePopup);
})();