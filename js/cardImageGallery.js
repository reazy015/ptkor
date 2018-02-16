'use strict';

window.cardGallery = ( function () {
    var mainSliderView = document.querySelector('.card-info-slider__main');
    var galleryPreview = document.querySelector('.card-info-slider-preview');
    var galleryPreviewItemsList = galleryPreview.querySelectorAll('.card-info-slider-preview-item');
    var nextBtn = document.querySelector('.card-info-slider-btn__next');
    var prevBtn = document.querySelector('.card-info-slider-btn__prev');
    // var videoPlayerControls = document.querySelector('.video-controls');
    var counter = 0;

    function removeAllChildElements(parentNode) {
        while (parentNode.firstElementChild) {
            parentNode.removeChild(parentNode.firstElementChild);
        }
    }

    function findItemIndexInList(item) {
        var index = Array.prototype.indexOf.call(galleryPreviewItemsList, item);
        return index;
    }

    function getCurrentActiveItem() {
        return document.querySelector('.card-info-slider-preview-item--active');
    }

    function makeAllItemsInactive() {
        for (var i = 0; i < galleryPreviewItemsList.length; i++) {
            galleryPreviewItemsList[i].classList.remove('card-info-slider-preview-item--active');
        }
    }

    function showImg(src) {
        var img = document.createElement('img');
        img.setAttribute('src', src);
        return img;
    }

    function showOnMainSliderViewer(previewItem) {
        var currentFocusItem = previewItem.firstElementChild;
        if (currentFocusItem.classList.contains('card-img')) {
            removeAllChildElements(mainSliderView);
            mainSliderView.appendChild(showImg(currentFocusItem.src));
            // videoPlayerControls.classList.add('video-controls--hidden')
        } else if (currentFocusItem.classList.contains('card-info-slider-video')) {
            removeAllChildElements(mainSliderView);
            mainSliderView.appendChild(currentFocusItem.cloneNode(true));
            mainSliderView.appendChild(window.videoPlayerControls.controls());
            // videoPlayerControls.classList.remove('video-controls--hidden');
        } else {

        }
    }

    nextBtn.addEventListener('click', function () {
        counter = findItemIndexInList(getCurrentActiveItem());
        counter++;
        makeAllItemsInactive();
        if (counter >= galleryPreviewItemsList.length) {
            counter = 0;
            galleryPreviewItemsList[counter].classList.add('card-info-slider-preview-item--active');
            showOnMainSliderViewer(galleryPreviewItemsList[counter]);
        } else {
            galleryPreviewItemsList[counter].classList.add('card-info-slider-preview-item--active');
            showOnMainSliderViewer(galleryPreviewItemsList[counter]);
        }
    });

    prevBtn.addEventListener('click', function () {
        counter = findItemIndexInList(getCurrentActiveItem());
        counter--;
        makeAllItemsInactive();
        if (counter < 0) {
            counter = galleryPreviewItemsList.length - 1;
            galleryPreviewItemsList[counter].classList.add('card-info-slider-preview-item--active');
            showOnMainSliderViewer(galleryPreviewItemsList[counter]);
        } else {
            galleryPreviewItemsList[counter].classList.add('card-info-slider-preview-item--active');
            showOnMainSliderViewer(galleryPreviewItemsList[counter]);
        }
    });

    galleryPreview.addEventListener('click', function(evt) {
        var target = evt.target;

        if (target.classList.contains('card-info-slider-preview-item')
            || target.classList.contains('card-img')
            || target.classList.contains('card-info-slider-video')) {
            makeAllItemsInactive();
            var currentPreviewItem = target.closest('.card-info-slider-preview-item');
            currentPreviewItem.classList.add('card-info-slider-preview-item--active');
            counter = findItemIndexInList(getCurrentActiveItem(currentPreviewItem));
            showOnMainSliderViewer(currentPreviewItem);
        }
    })

})();