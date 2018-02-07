'use strict';

window.modalPopup = ( function () {
    var popup = document.querySelector('.popup');
    var popupModal = popup.querySelector('.popup-modal');
    var popupModalCloseBtn = popupModal.querySelector('.popup-modal-close');
    var callbackOrder = document.querySelectorAll('.callback__order');

    function openClosePopup(evt) {
        evt.preventDefault();
        popup.classList.toggle('popup--open');
        document.body.classList.toggle('no-scroll');
    }

    for (var i = 0; i < callbackOrder.length; i++) {
        callbackOrder[i].addEventListener('click', openClosePopup);
    }

    window.addEventListener('click', function(evt) {
        if (evt.target == popup && popup.classList.contains('popup--open')) {
            popup.classList.remove('popup--open');
        }
    })
    popupModalCloseBtn.addEventListener('click', openClosePopup);
})();