'use strict';

window.cardTypesAccordion = ( function () {
    var typesAccordion = document.querySelector('.types-acc');
    var typesAccBlocksList = typesAccordion.querySelectorAll('.types-acc-block');
    var typesBlocksList =  typesAccordion.querySelectorAll('.types-acc-block-list');
    var typesBlocksHeaders = typesAccordion.querySelectorAll('.type-acc-block__header');

    function closeAllBlocks() {
        for (var i = 0; i < typesBlocksList.length; i++) {
            typesBlocksList[i].classList.remove('types-acc-block-list--active');
        }
    }

    function diactivateAllBlocks() {
        for (var i = 0; i < typesBlocksList.length; i++) {
            typesAccBlocksList[i].classList.remove('types-acc-block--active');
        }
    }

    function smoothListOpen(elem) {
        if (elem.style.maxHeight) {
            elem.style.maxHeight = null;
        } else {
            elem.style.maxHeight = elem.scrollHeight + 'px';
        }
    }



    typesAccordion.addEventListener('click', function(evt) {
        var target = evt.target;

        if (target.classList.contains('types-acc-block__switcher')) {


            var parent = target.closest('.types-acc-block');
            var childList = parent.querySelector('.types-acc-block-list');
            // parent.classList.toggle('types-acc-block--active');
            if (!parent.classList.contains('types-acc-block--active')) {
                closeAllBlocks();
                diactivateAllBlocks();
                childList.classList.add('types-acc-block-list--active');
                parent.classList.add('types-acc-block--active');
            } else {
                parent.classList.toggle('types-acc-block--active');
                childList.classList.remove('types-acc-block-list--active');
            }
        }
    })
})();