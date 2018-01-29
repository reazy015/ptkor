'use atrict';

window.cardGallery = ( function () {
    var mainImg = document.querySelector('.card-info-slider__main');
    var galleryPreview = document.querySelector('.card-info-slider-preview');
    var galleryPreviewItemsList = galleryPreview.querySelectorAll('.card-img');

    function disableActiveImg() {
        for (var i = 0; i < galleryPreviewItemsList.length; i++) {
            galleryPreviewItemsList[i].style.opacity = 0.6;
        }
    }

    function markAsActive(item) {
        item.style.opacity = 1;
    }

    function displayToMain(item) {
       mainImg.firstElementChild.src = item.src;

    }

    function showImg(evt) {
        var target = evt.target;
        if (target.classList.contains('card-img')) {
            disableActiveImg();
            markAsActive(target);
            displayToMain(target)
        }
    }

    galleryPreview.addEventListener('click', showImg);
})()