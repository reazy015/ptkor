'use strict';

window.videoPlayerControls = ( function () {
    var player = document.querySelector('.card-info-slider-video');
    var playerControls = document.querySelector('.video-controls');
    var playerPlayBtn = playerControls.querySelector('.video-controls__play');

    function viewerClickHandler() {
        var currentVideoItem = document.querySelector('.card-info-slider-video');
        var currentPlayBtn = document.querySelector('.video-controls__play');

        if (!currentVideoItem.paused) {
            currentVideoItem.pause();
            this.removeEventListener('click', viewerClickHandler);
            currentPlayBtn.style.visibility = 'visible';
        }
    }

    function btnClickHandler(evt) {
        evt.stopPropagation();
        var currentVideoItem = document.querySelector('.card-info-slider-video');

        if (currentVideoItem.paused) {
            currentVideoItem.play();
            this.style.visibility = 'hidden';
            this.closest('.video-controls').addEventListener('click', viewerClickHandler);
        } else {
            this.style.visibility = 'visible';
        }
    }

    function createVideoControls() {
        var fragment = document.createDocumentFragment();
        var videoPlayerControlPanel = document.createElement('div');
        var videoPlayerControlPlayBtn = document.createElement('button');
        var playBtnIcon = document.createElement('img');

        videoPlayerControlPanel.classList.add('video-controls');
        videoPlayerControlPlayBtn.classList.add('video-controls__play');
        playBtnIcon.setAttribute('src', 'img/video-play-icon.svg');
        playBtnIcon.setAttribute('alt', 'player-icon');

        videoPlayerControlPlayBtn.appendChild(playBtnIcon)
        videoPlayerControlPanel.appendChild(videoPlayerControlPlayBtn);
        fragment.appendChild(videoPlayerControlPanel);

        videoPlayerControlPlayBtn.addEventListener('click', btnClickHandler);

        return fragment;
    }

    return {
        controls: createVideoControls
    }
})();