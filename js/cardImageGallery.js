'use atrict';

window.cardGallery = ( function () {
    var mainImg = document.querySelector('.card-info-slider__main');
    var galleryPreview = document.querySelector('.card-info-slider-preview');
    var galleryPreviewItemsList = galleryPreview.querySelectorAll('.card-img');
    var mainImgSrc = mainImg.firstElementChild.src;

    function disableActiveImg() {
        for (var i = 0; i < galleryPreviewItemsList.length; i++) {
            galleryPreviewItemsList[i].style.opacity = 0.6;
        }
    }

    function markAsActive(item) {
        item.style.opacity = 1;
    }

    function displayToMain(item) {
        mainImgSrc = 'img/download2.png';

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