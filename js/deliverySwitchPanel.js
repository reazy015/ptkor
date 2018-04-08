'use strict';

window.deliverySwtitchPanel = ( function () {
    var deliveryInfoPanel = document.querySelector('.delivery-info-panel');
    var deliveryInfoPanelItemsList = deliveryInfoPanel.querySelectorAll('.delivery-info-panel__item');
    var deliveryInfoBlockList = document.querySelectorAll('.delivery-info-block');
    var deliverAdvantages = document.querySelector('.delivery-advantages');

    function closeAllInfoBlocks() {
        for (var i = 0; i < deliveryInfoBlockList.length; i++) {
            deliveryInfoBlockList[i].classList.remove('delivery-info-block--active');
        }
    }

    function switchOnFitBlock(target) {
        if (target === 'delivery') {
            deliverAdvantages.style.display = 'none';
        } else {
            deliverAdvantages.style.display = 'block';
        }

        for (var i = 0; i < deliveryInfoBlockList.length; i++) {
            if (deliveryInfoBlockList[i].dataset.target === target) {
                deliveryInfoBlockList[i].classList.add('delivery-info-block--active');

            }
        }
    }

    function deactivateAllInfoPanelItems() {
        for (var i = 0; i < deliveryInfoPanelItemsList.length; i++) {
            deliveryInfoPanelItemsList[i].classList.remove('delivery-info-panel__item--active');

        }
    }

    function switchPanelHandler(evt) {
        var target = evt.target;

        if (target.classList.contains('delivery-info-panel__item')) {
            closeAllInfoBlocks();
            deactivateAllInfoPanelItems();
            target.classList.add('delivery-info-panel__item--active');
            switchOnFitBlock(target.dataset.target);
        }
    }

    deliveryInfoPanel.addEventListener('click', switchPanelHandler);
})();